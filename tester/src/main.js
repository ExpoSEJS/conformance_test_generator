const fs = require('fs');
const child_process = require('child_process');

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

function splitDeliminatorReadToEndOfLine(output, index) {
  const deliminatorIndex = output.indexOf(':', index);
  const eolIndex = output.indexOf('\n', deliminatorIndex);
  if (eolIndex != -1) {
    return output.slice(deliminatorIndex + 1, eolIndex).trim();
  } else {
    return output.slice(deliminatorIndex + 1);
  }
}

function runTest(test, runner) {
  const output = runner(test);
  const indexOfResult = output.indexOf('STD:');
  const indexOfErr = output.indexOf('FN THROW ERR:');

  if (indexOfResult != -1) {
    const jsonResult = splitDeliminatorReadToEndOfLine(output, indexOfResult);
    return JSON.parse(jsonResult);
  } else if (indexOfErr != -1) {
    return splitDeliminatorReadToEndOfLine(output, indexOfErr);
  } else {
    console.log('Test case failed! with: ' + output);
    return undefined;
  }
}

function nodeJsRunner(testcase) {
  console.log(`Launching Node: ${testcase}`);
  return child_process.spawnSync('node', [testcase]).stdout.toString();
}

function quickJsRunner(testcase) {
  console.log(`Launching QJS: ${testcase}`);
  return child_process.spawnSync('qjs', [testcase]).stdout.toString();
}

function spidermonkeyRunner(testcase) {
  console.log(`Launching SpiderMonkey: ${testcase}`);
  return child_process.spawnSync('js59', [testcase]).stdout.toString();
}

function firefoxRunner(testcase) {
  console.log(`Launching FF: ${testcase}`);
  return child_process.spawnSync('firefox', ['-console', testcase]).stdout.toString();
}

let numberOfWrittenTests = 0;

function writeTest(test, suffix) {
  const newTestFilename = `dst/${numberOfWrittenTests}.${suffix}`;
  fs.writeFileSync(newTestFilename, test);
  numberOfWrittenTests += 1;
  child_process.spawnSync('browserify', [newTestFilename, '-o', newTestFilename + '.rewritten.js']);
  return newTestFilename + '.rewritten.js';
}

function doTest(methodName, input) {

  let tests = [writeTest(generateNodeTest(methodName, input), 'js'), writeTest(generateNodeTest(methodName, input, 'require(\'core-js\')'), 'js'), writeTest(generateNodeTest(methodName, input, `require('mdn-polyfills/${methodName}');`), 'js')]; 
  let outputs = [];

  for (let testCase of tests) {
    outputs.push(runTest(testCase, nodeJsRunner));
    outputs.push(runTest(testCase, quickJsRunner));
    outputs.push(runTest(testCase, spidermonkeyRunner));
    //runTest(testCase, spiderMonkey);
  }

  console.log('Test Outputs: ' + JSON.stringify(outputs));
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line) {
  const details = JSON.parse(line);
  doTest(details.method, details.input);
});
