J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"17":[1,6,1,17],"25":[2,5,2,11],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,15,4,22],"81":[4,23,4,35],"89":[4,15,4,36],"97":[4,15,4,36],"105":[4,15,4,36],"113":[5,15,5,22],"121":[5,23,5,35],"129":[5,15,5,36],"137":[5,15,5,36],"145":[5,15,5,36],"153":[6,1,6,7],"161":[7,12,7,19],"169":[7,20,7,27],"177":[7,28,7,30],"185":[7,20,7,31],"193":[7,12,7,32],"201":[7,12,7,32],"209":[7,5,7,33],"217":[6,18,8,2],"225":[6,18,8,2],"233":[6,18,8,2],"241":[6,18,8,2],"249":[6,1,8,2],"257":[6,1,8,3],"265":[1,1,8,3],"273":[1,1,8,3],"281":[1,1,8,3],"289":[1,1,3,2],"297":[6,18,8,2],"305":[6,18,8,2],"313":[1,1,8,3],"321":[1,1,8,3],"nBranches":2,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_to-iobject.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_to-iobject_jalangi_.js","code":"// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = require('./_iobject');\nvar defined = require('./_defined');\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n"};
jalangiLabel18:
    while (true) {
        try {
            J$.Se(265, '/home/blake/CoreJSTesting/modules/_to-iobject_jalangi_.js', '/home/blake/CoreJSTesting/modules/_to-iobject.js');
            J$.N(273, 'IObject', IObject, 0);
            J$.N(281, 'defined', defined, 0);
            if (J$.X1(289, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var IObject = J$.X1(105, J$.W(97, 'IObject', J$.F(89, J$.R(73, 'require', require, 2), 0)(J$.T(81, './_iobject', 21, false)), IObject, 3));
            var defined = J$.X1(145, J$.W(137, 'defined', J$.F(129, J$.R(113, 'require', require, 2), 0)(J$.T(121, './_defined', 21, false)), defined, 3));
            J$.X1(257, J$.P(249, J$.R(153, 'module', module, 2), 'exports', J$.T(241, function (it) {
                jalangiLabel17:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            it = J$.N(233, 'it', it, 4);
                            return J$.X1(209, J$.Rt(201, J$.F(193, J$.R(161, 'IObject', IObject, 1), 0)(J$.F(185, J$.R(169, 'defined', defined, 1), 0)(J$.R(177, 'it', it, 0)))));
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel17;
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
                continue jalangiLabel18;
            } else {
                J$.L();
                break jalangiLabel18;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
