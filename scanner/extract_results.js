const fs = require('fs');

function deConc(base, depth) {

  if (base && typeof(base.concrete) !== 'undefined') {
    base = base.concrete;
  }

  if (!depth) {
    return base;
  }

  if (base) {
    for (let i in base) {
      base[i] = deConc(base[i], depth - 1);
    }
  }
}

for (let targetI = 2; targetI < process.argv.length; targetI++) {
  const filename = process.argv[targetI];
  const methodName = filename.substr(filename.lastIndexOf('/') + 1);
  const file = '' + fs.readFileSync(process.argv[targetI]);
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
     
      base = deConc(base, 5); 
   
      let inputLine = '';
  
      function adda(a) {
        if (a === undefined) {
          inputLine += 'undefined';
        } else {
          inputLine += JSON.stringify(a);
        }
      }
      adda(base);
      
      for (let i = 0; i < args.length; i++) {
        args[i] = deConc(args[i], 5);
        inputLine += ',';
        adda(args[i]);
      }
  
      console.log(JSON.stringify({method: methodName, input: inputLine}));
    }
  }
}
