J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"17":[1,6,1,17],"18":[5,12,9,14],"25":[2,5,2,11],"26":[4,18,10,3],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,1,4,7],"81":[4,19,4,26],"89":[4,27,4,37],"97":[4,19,4,38],"105":[5,12,5,18],"113":[5,34,5,36],"121":[5,38,5,41],"129":[7,20,7,21],"137":[7,20,7,21],"145":[7,13,7,22],"153":[6,14,8,10],"161":[6,14,8,10],"169":[6,14,8,10],"177":[5,43,9,6],"185":[5,12,9,7],"187":[5,12,5,33],"193":[5,12,9,9],"201":[9,13,9,14],"209":[5,12,9,14],"217":[5,5,9,15],"225":[4,39,10,2],"233":[4,39,10,2],"241":[4,39,10,2],"249":[4,19,10,3],"257":[4,1,10,3],"265":[4,1,10,4],"273":[1,1,10,4],"281":[1,1,3,2],"289":[6,14,8,10],"297":[6,14,8,10],"305":[4,39,10,2],"313":[4,39,10,2],"321":[1,1,10,4],"329":[1,1,10,4],"nBranches":2,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_descriptors.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_descriptors_jalangi_.js","code":"// Thank's IE8 for his funny defineProperty\nmodule.exports = !require('./_fails')(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n"};
jalangiLabel36:
    while (true) {
        try {
            J$.Se(273, '/home/blake/CoreJSTesting/modules/_descriptors_jalangi_.js', '/home/blake/CoreJSTesting/modules/_descriptors.js');
            if (J$.X1(281, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            J$.X1(265, J$.P(257, J$.R(73, 'module', module, 2), 'exports', J$.U(26, '!', J$.F(249, J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, './_fails', 21, false)), 0)(J$.T(241, function () {
                jalangiLabel35:
                    while (true) {
                        try {
                            J$.Fe(225, arguments.callee, this, arguments);
                            arguments = J$.N(233, 'arguments', arguments, 4);
                            return J$.X1(217, J$.Rt(209, J$.B(18, '!=', J$.G(193, J$.M(185, J$.R(105, 'Object', Object, 2), 'defineProperty', 0)(J$.T(113, {}, 11, false), J$.T(121, 'a', 21, false), J$.T(177, {
                                get: J$.T(169, function () {
                                    jalangiLabel34:
                                        while (true) {
                                            try {
                                                J$.Fe(153, arguments.callee, this, arguments);
                                                arguments = J$.N(161, 'arguments', arguments, 4);
                                                return J$.X1(145, J$.Rt(137, J$.T(129, 7, 22, false)));
                                            } catch (J$e) {
                                                J$.Ex(289, J$e);
                                            } finally {
                                                if (J$.Fr(297))
                                                    continue jalangiLabel34;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 153)
                            }, 11, false)), 'a', 0), J$.T(201, 7, 22, false), 0)));
                        } catch (J$e) {
                            J$.Ex(305, J$e);
                        } finally {
                            if (J$.Fr(313))
                                continue jalangiLabel35;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 225))), 0));
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel36;
            } else {
                J$.L();
                break jalangiLabel36;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
