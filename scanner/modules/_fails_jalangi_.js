J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"17":[1,6,1,17],"18":[6,17,6,24],"25":[2,5,2,11],"26":[6,16,6,24],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,1,4,7],"81":[6,18,6,22],"89":[6,18,6,24],"97":[6,16,6,24],"105":[6,9,6,25],"113":[8,16,8,20],"121":[8,16,8,20],"129":[8,9,8,21],"137":[7,7,9,6],"145":[4,18,10,2],"153":[4,18,10,2],"161":[4,18,10,2],"169":[4,18,10,2],"177":[4,1,10,2],"185":[4,1,10,3],"193":[1,1,10,3],"201":[1,1,3,2],"209":[4,18,10,2],"217":[4,18,10,2],"225":[1,1,10,3],"233":[1,1,10,3],"nBranches":2,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_fails.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_fails_jalangi_.js","code":"module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n"};
jalangiLabel38:
    while (true) {
        try {
            J$.Se(193, '/home/blake/CoreJSTesting/modules/_fails_jalangi_.js', '/home/blake/CoreJSTesting/modules/_fails.js');
            if (J$.X1(201, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            J$.X1(185, J$.P(177, J$.R(73, 'module', module, 2), 'exports', J$.T(169, function (exec) {
                jalangiLabel37:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            exec = J$.N(161, 'exec', exec, 4);
                            try {
                                return J$.X1(105, J$.Rt(97, J$.U(26, '!', J$.U(18, '!', J$.F(89, J$.R(81, 'exec', exec, 0), 0)()))));
                            } catch (e) {
                                e = J$.N(137, 'e', e, 1);
                                return J$.X1(129, J$.Rt(121, J$.T(113, true, 23, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(209, J$e);
                        } finally {
                            if (J$.Fr(217))
                                continue jalangiLabel37;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 145), 0));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel38;
            } else {
                J$.L();
                break jalangiLabel38;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
