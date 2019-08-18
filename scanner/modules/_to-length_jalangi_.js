J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[7,12,7,18],"17":[1,6,1,17],"18":[7,12,7,18],"25":[2,5,2,11],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,17,4,24],"81":[4,25,4,40],"89":[4,17,4,41],"97":[4,17,4,41],"105":[4,17,4,41],"113":[5,11,5,15],"121":[5,11,5,19],"129":[5,11,5,19],"137":[5,11,5,19],"145":[6,1,6,7],"153":[7,12,7,14],"161":[7,17,7,18],"169":[7,21,7,24],"177":[7,25,7,34],"185":[7,35,7,37],"193":[7,25,7,38],"201":[7,40,7,56],"209":[7,21,7,57],"217":[7,60,7,61],"225":[7,12,7,61],"233":[7,5,7,62],"241":[6,18,8,2],"249":[6,18,8,2],"257":[6,18,8,2],"265":[6,18,8,2],"273":[6,1,8,2],"281":[6,1,8,3],"289":[1,1,8,3],"297":[1,1,8,3],"305":[1,1,8,3],"313":[1,1,3,2],"321":[7,12,7,61],"329":[6,18,8,2],"337":[6,18,8,2],"345":[1,1,8,3],"353":[1,1,8,3],"nBranches":4,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_to-length.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_to-length_jalangi_.js","code":"// 7.1.15 ToLength\nvar toInteger = require('./_to-integer');\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n"};
jalangiLabel26:
    while (true) {
        try {
            J$.Se(289, '/home/blake/CoreJSTesting/modules/_to-length_jalangi_.js', '/home/blake/CoreJSTesting/modules/_to-length.js');
            J$.N(297, 'toInteger', toInteger, 0);
            J$.N(305, 'min', min, 0);
            if (J$.X1(313, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var toInteger = J$.X1(105, J$.W(97, 'toInteger', J$.F(89, J$.R(73, 'require', require, 2), 0)(J$.T(81, './_to-integer', 21, false)), toInteger, 3));
            var min = J$.X1(137, J$.W(129, 'min', J$.G(121, J$.R(113, 'Math', Math, 2), 'min', 0), min, 3));
            J$.X1(281, J$.P(273, J$.R(145, 'module', module, 2), 'exports', J$.T(265, function (it) {
                jalangiLabel25:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            it = J$.N(257, 'it', it, 4);
                            return J$.X1(233, J$.Rt(225, J$.X1(321, J$.C(16, J$.B(18, '>', J$.R(153, 'it', it, 0), J$.T(161, 0, 22, false), 0))) ? J$.F(209, J$.R(169, 'min', min, 1), 0)(J$.F(193, J$.R(177, 'toInteger', toInteger, 1), 0)(J$.R(185, 'it', it, 0)), J$.T(201, 9007199254740991, 22, false)) : J$.T(217, 0, 22, false)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel25;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 241), 0));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel26;
            } else {
                J$.L();
                break jalangiLabel26;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
