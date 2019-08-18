J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[5,9,5,24],"17":[1,6,1,17],"18":[5,9,5,24],"25":[2,5,2,11],"26":[6,25,6,55],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,1,4,7],"81":[5,9,5,11],"89":[5,15,5,24],"97":[6,15,6,24],"105":[6,25,6,50],"113":[6,53,6,55],"121":[6,15,6,56],"129":[6,15,6,56],"137":[6,9,6,57],"145":[7,12,7,14],"153":[7,12,7,14],"161":[7,5,7,15],"169":[4,18,8,2],"177":[4,18,8,2],"185":[4,18,8,2],"193":[4,18,8,2],"201":[4,1,8,2],"209":[4,1,8,3],"217":[1,1,8,3],"225":[1,1,3,2],"233":[5,5,6,57],"241":[4,18,8,2],"249":[4,18,8,2],"257":[1,1,8,3],"265":[1,1,8,3],"nBranches":4,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_defined.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_defined_jalangi_.js","code":"// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n"};
jalangiLabel24:
    while (true) {
        try {
            J$.Se(217, '/home/blake/CoreJSTesting/modules/_defined_jalangi_.js', '/home/blake/CoreJSTesting/modules/_defined.js');
            if (J$.X1(225, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            J$.X1(209, J$.P(201, J$.R(73, 'module', module, 2), 'exports', J$.T(193, function (it) {
                jalangiLabel23:
                    while (true) {
                        try {
                            J$.Fe(169, arguments.callee, this, arguments);
                            arguments = J$.N(177, 'arguments', arguments, 4);
                            it = J$.N(185, 'it', it, 4);
                            if (J$.X1(233, J$.C(16, J$.B(18, '==', J$.R(81, 'it', it, 0), J$.T(89, undefined, 24, false), 0))))
                                throw J$.X1(137, J$.Th(129, J$.F(121, J$.R(97, 'TypeError', TypeError, 2), 0)(J$.B(26, '+', J$.T(105, 'Can\'t call method on  ', 21, false), J$.R(113, 'it', it, 0), 0))));
                            return J$.X1(161, J$.Rt(153, J$.R(145, 'it', it, 0)));
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel23;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 169), 0));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel24;
            } else {
                J$.L();
                break jalangiLabel24;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
