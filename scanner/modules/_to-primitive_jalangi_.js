J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[6,9,6,22],"17":[1,6,1,17],"18":[6,9,6,22],"24":[9,9,9,53],"25":[2,5,2,11],"26":[9,14,9,39],"32":[9,9,9,85],"33":[2,19,2,26],"34":[9,14,9,53],"40":[9,9,9,85],"41":[2,27,2,31],"42":[9,57,9,85],"48":[11,9,11,79],"49":[2,19,2,32],"50":[11,9,11,33],"56":[11,9,11,79],"57":[2,5,2,32],"58":[11,9,11,47],"64":[13,9,13,54],"65":[2,5,2,33],"66":[11,51,11,79],"72":[13,9,13,86],"73":[4,16,4,23],"74":[13,9,13,11],"80":[13,9,13,86],"81":[4,24,4,38],"82":[13,15,13,40],"89":[4,16,4,39],"90":[13,15,13,54],"97":[4,16,4,39],"98":[13,58,13,86],"105":[4,16,4,39],"113":[5,1,5,7],"121":[6,10,6,18],"129":[6,19,6,21],"137":[6,10,6,22],"145":[7,16,7,18],"153":[7,16,7,18],"161":[7,9,7,19],"169":[9,9,9,10],"177":[9,27,9,29],"185":[9,27,9,38],"193":[9,27,9,38],"201":[9,43,9,53],"209":[9,58,9,66],"217":[9,73,9,75],"225":[9,81,9,83],"233":[9,73,9,84],"235":[9,73,9,80],"241":[9,73,9,84],"249":[9,58,9,85],"257":[10,16,10,19],"265":[10,16,10,19],"273":[10,9,10,20],"281":[11,22,11,24],"289":[11,22,11,32],"297":[11,22,11,32],"305":[11,37,11,47],"313":[11,52,11,60],"321":[11,67,11,69],"329":[11,75,11,77],"337":[11,67,11,78],"339":[11,67,11,74],"345":[11,67,11,78],"353":[11,52,11,79],"361":[12,16,12,19],"369":[12,16,12,19],"377":[12,9,12,20],"385":[13,10,13,11],"393":[13,28,13,30],"401":[13,28,13,39],"409":[13,28,13,39],"417":[13,44,13,54],"425":[13,59,13,67],"433":[13,74,13,76],"441":[13,82,13,84],"449":[13,74,13,85],"451":[13,74,13,81],"457":[13,74,13,85],"465":[13,59,13,86],"473":[14,16,14,19],"481":[14,16,14,19],"489":[14,9,14,20],"497":[15,11,15,20],"505":[15,21,15,63],"513":[15,11,15,64],"521":[15,11,15,64],"529":[15,5,15,65],"537":[5,18,16,2],"545":[5,18,16,2],"553":[5,18,16,2],"561":[5,18,16,2],"569":[5,18,16,2],"577":[5,18,16,2],"585":[5,18,16,2],"593":[5,1,16,2],"601":[5,1,16,3],"609":[1,1,16,3],"617":[1,1,16,3],"625":[1,1,3,2],"633":[6,5,7,19],"641":[9,5,10,20],"649":[11,5,12,20],"657":[13,5,14,20],"665":[5,18,16,2],"673":[5,18,16,2],"681":[1,1,16,3],"689":[1,1,16,3],"nBranches":20,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_to-primitive.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_to-primitive_jalangi_.js","code":"// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = require('./_is-object');\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n"};
jalangiLabel40:
    while (true) {
        try {
            J$.Se(609, '/home/blake/CoreJSTesting/modules/_to-primitive_jalangi_.js', '/home/blake/CoreJSTesting/modules/_to-primitive.js');
            J$.N(617, 'isObject', isObject, 0);
            if (J$.X1(625, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var isObject = J$.X1(105, J$.W(97, 'isObject', J$.F(89, J$.R(73, 'require', require, 2), 0)(J$.T(81, './_is-object', 21, false)), isObject, 3));
            J$.X1(601, J$.P(593, J$.R(113, 'module', module, 2), 'exports', J$.T(585, function (it, S) {
                jalangiLabel39:
                    while (true) {
                        try {
                            J$.Fe(537, arguments.callee, this, arguments);
                            arguments = J$.N(545, 'arguments', arguments, 4);
                            it = J$.N(553, 'it', it, 4);
                            S = J$.N(561, 'S', S, 4);
                            J$.N(569, 'fn', fn, 0);
                            J$.N(577, 'val', val, 0);
                            if (J$.X1(633, J$.C(16, J$.U(18, '!', J$.F(137, J$.R(121, 'isObject', isObject, 1), 0)(J$.R(129, 'it', it, 0))))))
                                return J$.X1(161, J$.Rt(153, J$.R(145, 'it', it, 0)));
                            var fn, val;
                            if (J$.X1(641, J$.C(40, J$.C(32, J$.C(24, J$.R(169, 'S', S, 0)) ? J$.B(34, '==', J$.U(26, 'typeof', fn = J$.W(193, 'fn', J$.G(185, J$.R(177, 'it', it, 0), 'toString', 0), fn, 0)), J$.T(201, 'function', 21, false), 0) : J$._()) ? J$.U(42, '!', J$.F(249, J$.R(209, 'isObject', isObject, 1), 0)(val = J$.W(241, 'val', J$.M(233, J$.R(217, 'fn', fn, 0), 'call', 0)(J$.R(225, 'it', it, 0)), val, 0))) : J$._())))
                                return J$.X1(273, J$.Rt(265, J$.R(257, 'val', val, 0)));
                            if (J$.X1(649, J$.C(56, J$.C(48, J$.B(58, '==', J$.U(50, 'typeof', fn = J$.W(297, 'fn', J$.G(289, J$.R(281, 'it', it, 0), 'valueOf', 0), fn, 0)), J$.T(305, 'function', 21, false), 0)) ? J$.U(66, '!', J$.F(353, J$.R(313, 'isObject', isObject, 1), 0)(val = J$.W(345, 'val', J$.M(337, J$.R(321, 'fn', fn, 0), 'call', 0)(J$.R(329, 'it', it, 0)), val, 0))) : J$._())))
                                return J$.X1(377, J$.Rt(369, J$.R(361, 'val', val, 0)));
                            if (J$.X1(657, J$.C(80, J$.C(72, J$.C(64, J$.U(74, '!', J$.R(385, 'S', S, 0))) ? J$.B(90, '==', J$.U(82, 'typeof', fn = J$.W(409, 'fn', J$.G(401, J$.R(393, 'it', it, 0), 'toString', 0), fn, 0)), J$.T(417, 'function', 21, false), 0) : J$._()) ? J$.U(98, '!', J$.F(465, J$.R(425, 'isObject', isObject, 1), 0)(val = J$.W(457, 'val', J$.M(449, J$.R(433, 'fn', fn, 0), 'call', 0)(J$.R(441, 'it', it, 0)), val, 0))) : J$._())))
                                return J$.X1(489, J$.Rt(481, J$.R(473, 'val', val, 0)));
                            throw J$.X1(529, J$.Th(521, J$.F(513, J$.R(497, 'TypeError', TypeError, 2), 0)(J$.T(505, 'Can\'t convert object to primitive value', 21, false))));
                        } catch (J$e) {
                            J$.Ex(665, J$e);
                        } finally {
                            if (J$.Fr(673))
                                continue jalangiLabel39;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 537), 0));
        } catch (J$e) {
            J$.Ex(681, J$e);
        } finally {
            if (J$.Sr(689)) {
                J$.L();
                continue jalangiLabel40;
            } else {
                J$.L();
                break jalangiLabel40;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
