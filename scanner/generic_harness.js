var numberOfArguments = Number(process.env['NUM_ARGS']);
var importCmd = process.env['IMPORT'];
var fnName = process.env['FN_NAME'];
var fnClear = process.env['FN_CLEAR'];

function prepareFns() {
  var lhs = eval(fnName);
  eval(fnClear);
  eval(importCmd);
  var rhs = eval(fnName);

  if (!lhs || !rhs) {
    throw lhs + ' ' + rhs;
  }

  return [rhs, lhs];
} 

function test_identity(f1, f2, base, args) {
	var e1, e2;
	var v1, v2;

	try {
		v1 = f1.apply(base, args);
	} catch (e) {
		e1 = e;
	}

	try {
		v2 = f2.apply(base, args);
	} catch (e) {
		e2 = e;
	}

  console.log(`TC:${JSON.stringify(base)}!!${JSON.stringify(args)}`);
	console.log('Executing with base ' + base + ' and arguments ' + args + ' results ' + e1 + ' ' + e2 + ' ' + v1 + ' ' + v2);

	if (('' + e1) != ('' + e2)) {
		console.log(e1 ? e1.stack : '');
		console.log(e2 ? e2.stack : '');
		throw 'Diverge Ex: ' + e1 + ' vs ' + e2 + ' ' + v1 + ' ' + v2;
	}

	if (v1 != v2) {
		throw 'Diverge \'' + v1 + '\' \'' +  v2 + '\'';
	} 
}

function generateTest() {
  var S$ = require('S$');
  var fns = prepareFns();
  var args = [];
  for (var i = 0; i < numberOfArguments; i++) {
    args.push(S$.symbol('Argument'));
  }
  console.log('Run');
  test_identity(fns[0], fns[1], S$.symbol('Base'), args);
}

generateTest();
