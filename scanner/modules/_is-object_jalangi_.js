J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[5,12,5,34],"17":[1,6,1,17],"18":[5,12,5,21],"25":[2,5,2,11],"26":[5,12,5,34],"33":[2,19,2,26],"34":[5,37,5,48],"41":[2,27,2,31],"42":[5,51,5,60],"49":[2,19,2,32],"50":[5,51,5,75],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,1,4,7],"81":[5,19,5,21],"89":[5,26,5,34],"97":[5,37,5,39],"105":[5,44,5,48],"113":[5,58,5,60],"121":[5,65,5,75],"129":[5,12,5,75],"137":[5,5,5,76],"145":[4,18,6,2],"153":[4,18,6,2],"161":[4,18,6,2],"169":[4,18,6,2],"177":[4,1,6,2],"185":[4,1,6,3],"193":[1,1,6,3],"201":[1,1,3,2],"209":[5,12,5,75],"217":[4,18,6,2],"225":[4,18,6,2],"233":[1,1,6,3],"241":[1,1,6,3],"nBranches":4,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_is-object.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_is-object_jalangi_.js","code":"module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n"};
jalangiLabel30:
    while (true) {
        try {
            J$.Se(193, '/home/blake/CoreJSTesting/modules/_is-object_jalangi_.js', '/home/blake/CoreJSTesting/modules/_is-object.js');
            if (J$.X1(201, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            J$.X1(185, J$.P(177, J$.R(73, 'module', module, 2), 'exports', J$.T(169, function (it) {
                jalangiLabel29:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            it = J$.N(161, 'it', it, 4);
                            return J$.X1(137, J$.Rt(129, J$.X1(209, J$.C(16, J$.B(26, '===', J$.U(18, 'typeof', J$.R(81, 'it', it, 0)), J$.T(89, 'object', 21, false), 0))) ? J$.B(34, '!==', J$.R(97, 'it', it, 0), J$.T(105, null, 25, false), 0) : J$.B(50, '===', J$.U(42, 'typeof', J$.R(113, 'it', it, 0)), J$.T(121, 'function', 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(217, J$e);
                        } finally {
                            if (J$.Fr(225))
                                continue jalangiLabel29;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 145), 0));
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel30;
            } else {
                J$.L();
                break jalangiLabel30;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
