const sqlite = require('sqlite3');
const db = new sqlite.Database('./results.sqlite3');

function compareObjects(o, p)
{
  return JSON.stringify(o) === JSON.stringify(p);
    var i,
        keysO = Object.keys(o).sort(),
        keysP = Object.keys(p).sort();
    if (keysO.length !== keysP.length)
        return false;//not the same nr of keys
    if (keysO.join('') !== keysP.join(''))
        return false;//different keys
    for (i=0;i<keysO.length;++i)
    {
        if (o[keysO[i]] instanceof Array)
        {
            if (!(p[keysO[i]] instanceof Array))
                return false;
            //if (compareObjects(o[keysO[i]], p[keysO[i]] === false) return false
            //would work, too, and perhaps is a better fit, still, this is easy, too
            if (p[keysO[i]].sort().join('') !== o[keysO[i]].sort().join(''))
                return false;
        }
        else if (o[keysO[i]] instanceof Date)
        {
            if (!(p[keysO[i]] instanceof Date))
                return false;
            if ((''+o[keysO[i]]) !== (''+p[keysO[i]]))
                return false;
        }
        else if (o[keysO[i]] instanceof Function)
        {
            if (!(p[keysO[i]] instanceof Function))
                return false;
            //ignore functions, or check them regardless?
        }
        else if (o[keysO[i]] instanceof Object)
        {
            if (!(p[keysO[i]] instanceof Object))
                return false;
            if (o[keysO[i]] === o)
            {//self reference?
                if (p[keysO[i]] !== p)
                    return false;
            }
            else if (compareObjects(o[keysO[i]], p[keysO[i]]) === false)
                return false;//WARNING: does not deal with circular refs other than ^^
        }
        if (o[keysO[i]] !== p[keysO[i]])//change !== to != for loose comparison
            return false;//not the same value
    }
    return true;
}


function cmpTestcases(outputs) {

  outputs.sort((v1, v2) => v2.error < v2.error);
  let divergingErrors = [];
  let divergingOutputs = [];

//  let errorsInconsistent = outputs[0].error !== outputs[outputs.length - 1].error;

  if (typeof(outputs[0].error) !== typeof(outputs[outputs.length - 1].error)) {
    if (outputs[outputs.length - 2].error) {
      divergingErrors.push(outputs[outputs.length - 1]);
    } else {
      for (let i of outputs) {
        if (i.error) {
          divergingErrors.push(i);
        }
      }
    }
  }

  //Logic to compare
  //Sort all results
  //If I am index 0 then compare against i + 1 and i + 2 to decide if I am weird
  //If I am at last element then compare against i -1 and i - 2 to decide if I am weird
  //Otherwise compare against i - 1 and i + 2
  //If I am different to both of those compared against, then flag me

  outputs.sort((v1, v2) => v1.result - v2.result);
  let divergingOutput;
  for (let i = 0; i < outputs.length; i++) {
    let t1 = i - 1;
    let t2 = i + 1;

    if (i == 0) {
      if (outputs.length < 3) {
        t1 = i;
      } else {
        t1 = i + 2;
      }
    }

    if (i == outputs.length - 1) {
      if (outputs.length < 3) {
        t2 = i;
      } else {
        t2 = i - 2;
      }
    }

    if (!compareObjects(outputs[i].result, outputs[t1].result) && !compareObjects(outputs[i].result, outputs[t2].result)) { 
      divergingOutputs.push(outputs[i]);
    }
  }

  return [divergingErrors, divergingOutputs];
}

/**
 * Generate a testcase name + interpreter for grepping the output
 */
function testcaseName(output) {
  const testName = output.test;
  const testWithoutId = testName.slice(0, testName.search(/_[0-9]+/));
  return output.interpreter + '_' + testWithoutId;
}

/**
 * First scan identifies if there are any error cases
 */
db.each("SELECT * FROM testcase", function(err, row) {

  if (err) {
    console.log(err);
    return;
  }

  const outputList = JSON.parse(row.outputs);
  let [errors, outputs] = cmpTestcases(outputList);

  if (errors.length > 0) { //Because of some error some not
    if (errors.length == 1) {
      console.log('TCF:' + testcaseName(errors[0]), errors[0].error);
    } else {
      console.log('TCF:' + row.id + ' failed with multi error - manually check');
    }
  } else {
    if (outputs.length > 0) {
      if (outputs.length == 1) {
        const fail = outputs[0];
        console.log('TCF:' + testcaseName(fail), fail.error);
      } else {
        //console.log('Multi err');
        //console.log('TC:' + row.id + ' failed with multi error - manually check');
      }
    }
  } 
});

/**
 * Second scan identifies all unique errors
 */
db.each("SELECT * FROM testcase", function(err, row) {

  if (err) {
    console.log(err);
    return;
  }

  const outputList = JSON.parse(row.outputs);
  let [errors, outputs] = cmpTestcases(outputList);

  for (let elem of outputList.filter(output => !!output.error)) {
    console.log('ERROR:' + testcaseName(elem) + ' ' + elem.error);
  }
});
