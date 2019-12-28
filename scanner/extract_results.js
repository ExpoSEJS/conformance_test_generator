const fs = require('fs');
const filename = process.argv[process.argv.length - 1];
const methodName = filename.substr(filename.lastIndexOf('/') + 1);
const file = '' + fs.readFileSync(process.argv[process.argv.length - 1]);
const lines = file.split('\n');

for (let line of lines) {
  if (line.startsWith('TC:')) {
    line = line.substr(3).split('!!');
    let base;
    if (line[0] == "undefined") {
      base = undefined;
    } else {
      base = JSON.parse(line[0]);
    }
    const args = JSON.parse(line[1]);
    
    let inputLine = '' + base;
    
    for (let i = 0; i < args.length; i++) {
      inputLine += ',' + JSON.stringify(args[i]);
    }

    console.log(JSON.stringify({method: methodName, input: inputLine}));
  }
}
