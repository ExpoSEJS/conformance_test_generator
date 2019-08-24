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

function generateFirefoxTest(methodName, methodInput) {
  const template = `<html><head><script>try {\n \
                      var result = ${methodName}.apply(${methodInput});
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
  console.log(`Launching ${testcase}`);
  return child_process.spawnSync('node', [testcase]).stdout.toString();
}

function firefoxRunner(testcase) {
  console.log(`Launching ${testcase}`);
  return child_process.spawnSync('firefox', ['-console', testcase]).stdout.toString();
}

let numberOfWrittenTests = 0;
function writeTest(test, suffix) {
  const newTestFilename = `dst/${numberOfWrittenTests}.${suffix}`;
  fs.writeFileSync(newTestFilename, test);
  numberOfWrittenTests += 1;
  return newTestFilename;
}

function doTest(methodName, input) {
  const coreJs = writeTest(generateNodeTest(methodName, input, 'require(\'core-js\')'), 'js');
  const mdnPolyfill = writeTest(generateNodeTest(methodName, input, `require('mdn-polyfills/${methodName}');`), 'js');
  const firefox = writeTest(generateFirefoxTest(methodName, input), 'html');

  runTest(coreJs, nodeJsRunner);
  runTest(mdnPolyfill, nodeJsRunner);
  runTest(firefox, firefoxRunner);
}

doTest('String.prototype.includes', '\'bob\', [\'hello\']');
