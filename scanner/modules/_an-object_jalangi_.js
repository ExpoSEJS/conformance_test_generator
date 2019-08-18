J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[6,9,6,22],"17":[1,6,1,17],"18":[6,9,6,22],"25":[2,5,2,11],"26":[7,25,7,50],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,16,4,23],"81":[4,24,4,38],"89":[4,16,4,39],"97":[4,16,4,39],"105":[4,16,4,39],"113":[5,1,5,7],"121":[6,10,6,18],"129":[6,19,6,21],"137":[6,10,6,22],"145":[7,15,7,24],"153":[7,25,7,27],"161":[7,30,7,50],"169":[7,15,7,51],"177":[7,15,7,51],"185":[7,9,7,52],"193":[8,12,8,14],"201":[8,12,8,14],"209":[8,5,8,15],"217":[5,18,9,2],"225":[5,18,9,2],"233":[5,18,9,2],"241":[5,18,9,2],"249":[5,1,9,2],"257":[5,1,9,3],"265":[1,1,9,3],"273":[1,1,9,3],"281":[1,1,3,2],"289":[6,5,7,52],"297":[5,18,9,2],"305":[5,18,9,2],"313":[1,1,9,3],"321":[1,1,9,3],"nBranches":4,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_an-object.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_an-object_jalangi_.js","code":"var isObject = require('./_is-object');\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n"};
jalangiLabel28:
    while (true) {
        try {
            J$.Se(265, '/home/blake/CoreJSTesting/modules/_an-object_jalangi_.js', '/home/blake/CoreJSTesting/modules/_an-object.js');
            J$.N(273, 'isObject', isObject, 0);
            if (J$.X1(281, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var isObject = J$.X1(105, J$.W(97, 'isObject', J$.F(89, J$.R(73, 'require', require, 2), 0)(J$.T(81, './_is-object', 21, false)), isObject, 3));
            J$.X1(257, J$.P(249, J$.R(113, 'module', module, 2), 'exports', J$.T(241, function (it) {
                jalangiLabel27:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            it = J$.N(233, 'it', it, 4);
                            if (J$.X1(289, J$.C(16, J$.U(18, '!', J$.F(137, J$.R(121, 'isObject', isObject, 1), 0)(J$.R(129, 'it', it, 0))))))
                                throw J$.X1(185, J$.Th(177, J$.F(169, J$.R(145, 'TypeError', TypeError, 2), 0)(J$.B(26, '+', J$.R(153, 'it', it, 0), J$.T(161, ' is not an object!', 21, false), 0))));
                            return J$.X1(209, J$.Rt(201, J$.R(193, 'it', it, 0)));
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel27;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 217), 0));
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel28;
            } else {
                J$.L();
                break jalangiLabel28;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
