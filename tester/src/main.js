const fs = require('fs');
const child_process = require('child_process');

function generateNodeTest(methodName, methodInput, codeToLoadPolyfill) {
  const template = `delete ${methodName};\n \
                    ${codeToLoadPolyfill};\n \
                    try {\n \
                      var result = ${methodName}.apply(${methodInput});
                      console.log('STD:'+JSON.stringify(result));
                    } catch (e) {\n \
                      console.log('FN THROW ERR:' + e);\n \
                    }`;

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
    console.log('Test case failed!');
    return undefined;
  }
}

function nodeJsRunner(testcase) {
  console.log(`Launching ${testcase}`);
  return child_process.spawnSync('node', [testcase]).stdout.toString();
}

let numberOfWrittenTests = 0;
function writeTest(test) {
  const newTestFilename = `dst/${numberOfWrittenTests}.js`;
  fs.writeFileSync(newTestFilename, test);
  numberOfWrittenTests += 1;
  return newTestFilename;
}

function doTest(methodName, input) {
  const coreJs = writeTest(generateNodeTest(methodName, input, 'require(\'core-js\')'));
  const mdnPolyfill = writeTest(generateNodeTest(methodName, input, `require('mdn-polyfills/${methodName}');`));
  runTest(coreJs, nodeJsRunner);
  runTest(mdnPolyfill, nodeJsRunner);
}

doTest('String.prototype.includes', '\'bob\', [\'hello\']');
