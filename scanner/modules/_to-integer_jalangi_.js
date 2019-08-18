J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[7,35,7,41],"17":[1,6,1,17],"18":[7,23,7,26],"24":[7,12,7,27],"25":[2,5,2,11],"26":[7,35,7,41],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,12,4,16],"81":[4,12,4,21],"89":[4,12,4,21],"97":[4,12,4,21],"105":[5,13,5,17],"113":[5,13,5,23],"121":[5,13,5,23],"129":[5,13,5,23],"137":[6,1,6,7],"145":[7,12,7,17],"153":[7,24,7,26],"161":[7,23,7,26],"169":[7,12,7,27],"177":[7,30,7,31],"185":[7,35,7,37],"193":[7,40,7,41],"201":[7,44,7,49],"209":[7,52,7,56],"217":[7,58,7,60],"225":[7,34,7,61],"233":[7,12,7,61],"241":[7,5,7,62],"249":[6,18,8,2],"257":[6,18,8,2],"265":[6,18,8,2],"273":[6,18,8,2],"281":[6,1,8,2],"289":[6,1,8,3],"297":[1,1,8,3],"305":[1,1,8,3],"313":[1,1,8,3],"321":[1,1,3,2],"329":[7,35,7,56],"337":[7,12,7,61],"345":[6,18,8,2],"353":[6,18,8,2],"361":[1,1,8,3],"369":[1,1,8,3],"nBranches":6,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_to-integer.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_to-integer_jalangi_.js","code":"// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n"};
jalangiLabel28:
    while (true) {
        try {
            J$.Se(297, '/home/blake/CoreJSTesting/modules/_to-integer_jalangi_.js', '/home/blake/CoreJSTesting/modules/_to-integer.js');
            J$.N(305, 'ceil', ceil, 0);
            J$.N(313, 'floor', floor, 0);
            if (J$.X1(321, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var ceil = J$.X1(97, J$.W(89, 'ceil', J$.G(81, J$.R(73, 'Math', Math, 2), 'ceil', 0), ceil, 3));
            var floor = J$.X1(129, J$.W(121, 'floor', J$.G(113, J$.R(105, 'Math', Math, 2), 'floor', 0), floor, 3));
            J$.X1(289, J$.P(281, J$.R(137, 'module', module, 2), 'exports', J$.T(273, function (it) {
                jalangiLabel27:
                    while (true) {
                        try {
                            J$.Fe(249, arguments.callee, this, arguments);
                            arguments = J$.N(257, 'arguments', arguments, 4);
                            it = J$.N(265, 'it', it, 4);
                            return J$.X1(241, J$.Rt(233, J$.X1(337, J$.C(24, J$.F(169, J$.R(145, 'isNaN', isNaN, 2), 0)(it = J$.W(161, 'it', J$.U(18, '+', J$.R(153, 'it', it, 0)), it, 0)))) ? J$.T(177, 0, 22, false) : J$.F(225, J$.X1(329, J$.C(16, J$.B(26, '>', J$.R(185, 'it', it, 0), J$.T(193, 0, 22, false), 0))) ? J$.R(201, 'floor', floor, 1) : J$.R(209, 'ceil', ceil, 1), 0)(J$.R(217, 'it', it, 0))));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel27;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 249), 0));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel28;
            } else {
                J$.L();
                break jalangiLabel28;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
