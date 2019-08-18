J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[6,12,6,31],"17":[1,6,1,17],"18":[6,12,6,31],"24":[5,18,5,53],"25":[2,5,2,11],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,11,4,18],"81":[4,19,4,27],"89":[4,11,4,28],"97":[4,11,4,28],"105":[4,11,4,28],"113":[5,1,5,7],"121":[5,18,5,24],"129":[5,25,5,28],"137":[5,18,5,29],"145":[5,51,5,52],"153":[5,18,5,53],"155":[5,18,5,50],"161":[5,56,5,62],"169":[6,12,6,15],"177":[6,16,6,18],"185":[6,12,6,19],"193":[6,23,6,31],"201":[6,34,6,36],"209":[6,43,6,45],"217":[6,34,6,46],"219":[6,34,6,42],"225":[6,49,6,55],"233":[6,56,6,58],"241":[6,49,6,59],"249":[6,12,6,59],"257":[6,5,6,60],"265":[5,65,7,2],"273":[5,65,7,2],"281":[5,65,7,2],"289":[5,65,7,2],"297":[5,1,7,2],"305":[5,1,7,3],"313":[1,1,7,3],"321":[1,1,7,3],"329":[1,1,3,2],"337":[6,12,6,59],"345":[5,65,7,2],"353":[5,65,7,2],"361":[5,18,7,2],"369":[1,1,7,3],"377":[1,1,7,3],"nBranches":6,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_iobject.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_iobject_jalangi_.js","code":"// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = require('./_cof');\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n"};
jalangiLabel20:
    while (true) {
        try {
            J$.Se(313, '/home/blake/CoreJSTesting/modules/_iobject_jalangi_.js', '/home/blake/CoreJSTesting/modules/_iobject.js');
            J$.N(321, 'cof', cof, 0);
            if (J$.X1(329, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var cof = J$.X1(105, J$.W(97, 'cof', J$.F(89, J$.R(73, 'require', require, 2), 0)(J$.T(81, './_cof', 21, false)), cof, 3));
            J$.X1(305, J$.P(297, J$.R(113, 'module', module, 2), 'exports', J$.X1(361, J$.C(24, J$.M(153, J$.F(137, J$.R(121, 'Object', Object, 2), 0)(J$.T(129, 'z', 21, false)), 'propertyIsEnumerable', 0)(J$.T(145, 0, 22, false)))) ? J$.R(161, 'Object', Object, 2) : J$.T(289, function (it) {
                jalangiLabel19:
                    while (true) {
                        try {
                            J$.Fe(265, arguments.callee, this, arguments);
                            arguments = J$.N(273, 'arguments', arguments, 4);
                            it = J$.N(281, 'it', it, 4);
                            return J$.X1(257, J$.Rt(249, J$.X1(337, J$.C(16, J$.B(18, '==', J$.F(185, J$.R(169, 'cof', cof, 1), 0)(J$.R(177, 'it', it, 0)), J$.T(193, 'String', 21, false), 0))) ? J$.M(217, J$.R(201, 'it', it, 0), 'split', 0)(J$.T(209, '', 21, false)) : J$.F(241, J$.R(225, 'Object', Object, 2), 0)(J$.R(233, 'it', it, 0))));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel19;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 265), 0));
        } catch (J$e) {
            J$.Ex(369, J$e);
        } finally {
            if (J$.Sr(377)) {
                J$.L();
                continue jalangiLabel20;
            } else {
                J$.L();
                break jalangiLabel20;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
