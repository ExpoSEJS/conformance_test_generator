var S$ = require('S$');

Error.stackTraceLimit = Infinity;
var lhs = String.prototype.includes;
delete String.prototype.includes;
require('mdn-polyfills/String.prototype.includes');
var rhs = String.prototype.includes;
 
//console.log(JSON.stringify(rhs));

function test_identity(f1, f2, base, args) {
	var e1, e2;
	var v1, v2;

	console.log('Executing with base ' + base + ' and arguments ' + args);

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

	//v1 = JSON.stringify(v1);
	//v2 = JSON.stringify(v2);

	if (('' + e1) != ('' + e2)) {
		console.log(e1 ? e1.stack : '');
		console.log(e2 ? e2.stack : '');
		throw 'Diverge Ex: ' + e1 + ' vs ' + e2 + ' ' + v1 + ' ' + v2;
	}

	if (v1 != v2) {
		throw 'Diverge \'' + v1 + '\' \'' +  v2 + '\'';
	} 
}

test_identity(lhs, rhs, S$.symbol('Base'), [S$.symbol('Arguments 1'), S$.symbol('Arguments 2'), S$.symbol('Arguments 3')]);
