J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[9,12,9,21],"17":[1,6,1,17],"18":[9,12,9,21],"25":[2,5,2,11],"26":[9,28,9,42],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,17,4,24],"81":[4,25,4,40],"89":[4,17,4,41],"97":[4,17,4,41],"105":[4,17,4,41],"113":[5,11,5,15],"121":[5,11,5,19],"129":[5,11,5,19],"137":[5,11,5,19],"145":[6,11,6,15],"153":[6,11,6,19],"161":[6,11,6,19],"169":[6,11,6,19],"177":[7,1,7,7],"185":[8,13,8,22],"193":[8,23,8,28],"201":[8,13,8,29],"209":[8,13,8,29],"217":[8,5,8,30],"225":[9,12,9,17],"233":[9,20,9,21],"241":[9,24,9,27],"249":[9,28,9,33],"257":[9,36,9,42],"265":[9,44,9,45],"273":[9,24,9,46],"281":[9,49,9,52],"289":[9,53,9,58],"297":[9,60,9,66],"305":[9,49,9,67],"313":[9,12,9,67],"321":[9,5,9,68],"329":[7,18,10,2],"337":[7,18,10,2],"345":[7,18,10,2],"353":[7,18,10,2],"361":[7,18,10,2],"369":[7,1,10,2],"377":[7,1,10,3],"385":[1,1,10,3],"393":[1,1,10,3],"401":[1,1,10,3],"409":[1,1,10,3],"417":[1,1,3,2],"425":[9,12,9,67],"433":[7,18,10,2],"441":[7,18,10,2],"449":[1,1,10,3],"457":[1,1,10,3],"nBranches":4,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_to-absolute-index.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_to-absolute-index_jalangi_.js","code":"var toInteger = require('./_to-integer');\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n"};
jalangiLabel30:
    while (true) {
        try {
            J$.Se(385, '/home/blake/CoreJSTesting/modules/_to-absolute-index_jalangi_.js', '/home/blake/CoreJSTesting/modules/_to-absolute-index.js');
            J$.N(393, 'toInteger', toInteger, 0);
            J$.N(401, 'max', max, 0);
            J$.N(409, 'min', min, 0);
            if (J$.X1(417, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var toInteger = J$.X1(105, J$.W(97, 'toInteger', J$.F(89, J$.R(73, 'require', require, 2), 0)(J$.T(81, './_to-integer', 21, false)), toInteger, 3));
            var max = J$.X1(137, J$.W(129, 'max', J$.G(121, J$.R(113, 'Math', Math, 2), 'max', 0), max, 3));
            var min = J$.X1(169, J$.W(161, 'min', J$.G(153, J$.R(145, 'Math', Math, 2), 'min', 0), min, 3));
            J$.X1(377, J$.P(369, J$.R(177, 'module', module, 2), 'exports', J$.T(361, function (index, length) {
                jalangiLabel29:
                    while (true) {
                        try {
                            J$.Fe(329, arguments.callee, this, arguments);
                            arguments = J$.N(337, 'arguments', arguments, 4);
                            index = J$.N(345, 'index', index, 4);
                            length = J$.N(353, 'length', length, 4);
                            J$.X1(217, index = J$.W(209, 'index', J$.F(201, J$.R(185, 'toInteger', toInteger, 1), 0)(J$.R(193, 'index', index, 0)), index, 0));
                            return J$.X1(321, J$.Rt(313, J$.X1(425, J$.C(16, J$.B(18, '<', J$.R(225, 'index', index, 0), J$.T(233, 0, 22, false), 0))) ? J$.F(273, J$.R(241, 'max', max, 1), 0)(J$.B(26, '+', J$.R(249, 'index', index, 0), J$.R(257, 'length', length, 0), 0), J$.T(265, 0, 22, false)) : J$.F(305, J$.R(281, 'min', min, 1), 0)(J$.R(289, 'index', index, 0), J$.R(297, 'length', length, 0))));
                        } catch (J$e) {
                            J$.Ex(433, J$e);
                        } finally {
                            if (J$.Fr(441))
                                continue jalangiLabel29;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 329), 0));
        } catch (J$e) {
            J$.Ex(449, J$e);
        } finally {
            if (J$.Sr(457)) {
                J$.L();
                continue jalangiLabel30;
            } else {
                J$.L();
                break jalangiLabel30;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
