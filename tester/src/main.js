const fs = require('fs');
const child_process = require('child_process');
const { exec, spawn, fork, execFile } = require('promisify-child-process')
const sqlite = require('sqlite3');
const db = new sqlite.Database('./results.sqlite3');

db.run("CREATE TABLE IF NOT EXISTS testcase (id INTEGER, test TEXT, input TEXT, error BOOLEAN, outputs TEXT, reason TEXT)");

async function multiRunner(count, list) {
  let runners = []; 
  for (let i = 0; i < count; i++) {
  
    runners.push((async function() {
      console.log(`${i} next test`);
      let next;
      while ((next = list.pop())) {
        await doTest(next.method, next.input);
      }
    })());
  }
  await Promise.all(runners);
}

function generateNodeTest(methodName, methodInput, codeToLoadPolyfill) {
  let template = '';

  if (codeToLoadPolyfill) {
    template += `delete ${methodName};\n \
                 ${codeToLoadPolyfill};\n`;
  }

  template +=       `
                    try {\n \
                      var result = ${methodName}.call(${methodInput});
                      console.log('STD:'+JSON.stringify(result));
                    } catch (e) {\n \
                      console.log('FN THROW ERR:' + e);\n \
                    }`;
  return template;
}

function generateFirefoxTest(methodName, methodInput) {
  const template = `<html><head><script>try {\n \
                      var result = ${methodName}.call(${methodInput});
                      window.dump('STD:'+JSON.stringify(result));
                    } catch (e) {\n \
                      window.dump('FN THROW ERR:' + e);\n \
                    }\n \
                    window.opener = self; window.close()</script></head></html>`;
  return template;
}

async function runTest(test, runner) {
  let result = undefined;
  let error = undefined;

  await runner(test, function(line) {
    try {
      line = '' + line;
      const indexResult = line.indexOf('STD:');
      if (indexResult != -1) {
        result = JSON.parse(line.substr(indexResult + 4));
      }
      const indexOfErr = line.indexOf('FN THROW ERR:');
      if (indexOfErr != -1) {
        error = line.substr(indexOfErr + 'FN THROW ERR:'.length);
      }
    } catch (e) {
      console.log(`Test Case Error ${e}`);
    }  
  });

  return {
    test: test,
    result: result,
    error: error,
    sys_error: (result === undefined && error === undefined) ? 'Interpreter failed to execute testcase' : undefined
  };
}

async function cliRunner(program, testcase, lineFeedback) {
  const child = spawn(program, [ testcase ], {encoding: 'utf8'});
  child.stdout.on('data', lineFeedback);
  child.stderr.on('data', lineFeedback);
  let done = setTimeout(function(){
    console.log(`Testcase ${testcase} hit timeout`);
    child.kill()
  }, 2000);
  await child;
  clearTimeout(done);
}

let numberOfWrittenTests = 0;

async function writeTest(testName, test, suffix) {
  const newTestFilename = `dst/${testName}_${numberOfWrittenTests}.${suffix}`;
  fs.writeFileSync(newTestFilename, test);
  numberOfWrittenTests += 1;
  await spawn('browserify', [newTestFilename, '-o', newTestFilename + '.rewritten.js']);
  return newTestFilename + '.rewritten.js';
}

let testcaseGlobalId = 0;

function cmpTestcases(methodName, input, outputs) {

  //We attach a global ID to the testcase to allow us to find multiple errors from the SQL output

  //Error cases we care about for test case runner
  //1. Some error, some give output
  //2. Outputs differ

  //How we do this
  //Sort the output errorList
  //If typeof(errorList[0]) != typeof(errorList[-1]) then some elements throw and some don't (error 1) (A1)
  //Sort the output results
  //If not A1 and outputs[x] !== outputs[x - 1] for all 0 < x < outputs.length then 2.

  function flag(reason, divergingOutput) {
    const insertTestcase = db.prepare("INSERT INTO testcase VALUES (?, ?, ?, ?, ?, ?)");
    insertTestcase.run(testcaseGlobalId++, methodName, input, reason.length > 0, JSON.stringify(outputs), reason + (divergingOutput ? (' diverged on ' + divergingOutput.test) : '')); 
    insertTestcase.finalize();
  }

  outputs.sort((v1, v2) => v2.error < v2.error);

//  let errorsInconsistent = outputs[0].error !== outputs[outputs.length - 1].error;

  if (typeof(outputs[0].error) !== typeof(outputs[outputs.length - 1].error)) {
    flag('Some testcases throw, others do not', outputs[outputs.length - 1]);
  } else {
    outputs.sort((v1, v2) => v1.result - v2.result);
    let divergingOutput;
    for (let i = 1; i < outputs.length; i++) {
      if (outputs[i].result !== outputs[i - 1].result) {
        divergingOutput = outputs[i];
      }
    }
    if (divergingOutput) {
      flag('Some outputs differ', divergingOutput);
    } else {
      flag('');
    }
  } 
}

/**
 * Here we execute our test cases.
 * First, we execute all the native interpreter methods (testAll)
 * Next, we execute our polyfills just in Node (Some break in other interpreters)
 */
async function doTest(methodName, input) {

  try {

    let testsAll = [
      await writeTest(`native_${methodName}`, generateNodeTest(methodName, input), 'js'),
    ]; 
    
    let outputs = [];

    for (let testCase of testsAll) {
      outputs.push(await runTest(testCase, cliRunner.bind(null, 'node')));
      outputs.push(await runTest(testCase, cliRunner.bind(null, '../../quickjs/qjs')));
      outputs.push(await runTest(testCase, cliRunner.bind(null, 'js59')));
    }

    let testsJustNode = [
      await writeTest(`corejs_${methodName}`, generateNodeTest(methodName, input, 'require(\'core-js\')'), 'js'),
      await writeTest(`mdn_${methodName}`, generateNodeTest(methodName, input, `require('mdn-polyfills/${methodName}');`), 'js')
    ];

    for (let testCase of testsJustNode) {
      outputs.push(await runTest(testCase, cliRunner.bind(null, 'node')));
    }

    outputs = outputs.filter(output => !output.sys_error);
    if (outputs.length) {
      cmpTestcases(methodName, input, outputs);
    } else {
      console.log(`${methodName}:${input} all testcases failed`);
    }
  } catch (e) {
    console.log(`Testcase: ${methodName} ${JSON.stringify(input)} has failed because ${e} ${e.stack}`);
  }
}

(async function() {
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  let tests = [];
  
  rl.on('line', function(line) {
    tests.push(JSON.parse(line));
  });

  rl.on('close', async function() {
    multiRunner(16, tests);
  });
})();
