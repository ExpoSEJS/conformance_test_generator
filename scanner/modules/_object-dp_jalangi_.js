J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[12,9,12,23],"17":[1,6,1,17],"18":[17,9,17,28],"24":[17,9,17,51],"25":[2,5,2,11],"26":[17,32,17,51],"32":[17,9,17,51],"33":[2,19,2,26],"34":[19,9,19,30],"40":[19,9,19,30],"41":[2,27,2,31],"48":[8,13,8,38],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,16,4,23],"81":[4,24,4,38],"89":[4,16,4,39],"97":[4,16,4,39],"105":[4,16,4,39],"113":[5,22,5,29],"121":[5,30,5,49],"129":[5,22,5,50],"137":[5,22,5,50],"145":[5,22,5,50],"153":[6,19,6,26],"161":[6,27,6,44],"169":[6,19,6,45],"177":[6,19,6,45],"185":[6,19,6,45],"193":[7,10,7,16],"201":[7,10,7,31],"209":[7,10,7,31],"217":[7,10,7,31],"225":[8,1,8,8],"233":[8,13,8,20],"241":[8,21,8,37],"249":[8,13,8,38],"257":[8,41,8,47],"265":[8,41,8,62],"273":[9,5,9,13],"281":[9,14,9,15],"289":[9,5,9,16],"297":[9,5,9,17],"305":[10,9,10,20],"313":[10,21,10,22],"321":[10,24,10,28],"329":[10,9,10,29],"337":[10,9,10,29],"345":[10,5,10,30],"353":[11,5,11,13],"361":[11,14,11,24],"369":[11,5,11,25],"377":[11,5,11,26],"385":[12,9,12,23],"393":[14,20,14,22],"401":[14,23,14,24],"409":[14,26,14,27],"417":[14,29,14,39],"425":[14,20,14,40],"433":[14,20,14,40],"441":[14,13,14,41],"449":[15,11,16,10],"457":[17,9,17,14],"465":[17,18,17,28],"473":[17,32,17,37],"481":[17,41,17,51],"489":[18,15,18,24],"497":[18,25,18,51],"505":[18,15,18,52],"513":[18,15,18,52],"521":[18,9,18,53],"529":[19,9,19,16],"537":[19,20,19,30],"545":[20,9,20,10],"553":[20,11,20,12],"561":[20,16,20,26],"569":[20,16,20,32],"577":[20,9,20,32],"585":[20,9,20,33],"593":[21,12,21,13],"601":[21,12,21,13],"609":[21,5,21,14],"617":[8,65,22,2],"625":[8,65,22,2],"633":[8,65,22,2],"641":[8,65,22,2],"649":[8,65,22,2],"657":[8,65,22,2],"665":[8,65,22,2],"673":[8,1,22,2],"681":[8,1,22,3],"689":[1,1,22,3],"697":[1,1,22,3],"705":[1,1,22,3],"713":[1,1,22,3],"721":[1,1,22,3],"729":[1,1,3,2],"737":[12,5,16,10],"745":[17,5,18,53],"753":[19,5,20,33],"761":[8,65,22,2],"769":[8,65,22,2],"777":[8,13,22,2],"785":[1,1,22,3],"793":[1,1,22,3],"nBranches":12,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_object-dp.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_object-dp_jalangi_.js","code":"var anObject = require('./_an-object');\nvar IE8_DOM_DEFINE = require('./_ie8-dom-define');\nvar toPrimitive = require('./_to-primitive');\nvar dP = Object.defineProperty;\n\nexports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n"};
jalangiLabel26:
    while (true) {
        try {
            J$.Se(689, '/home/blake/CoreJSTesting/modules/_object-dp_jalangi_.js', '/home/blake/CoreJSTesting/modules/_object-dp.js');
            J$.N(697, 'anObject', anObject, 0);
            J$.N(705, 'IE8_DOM_DEFINE', IE8_DOM_DEFINE, 0);
            J$.N(713, 'toPrimitive', toPrimitive, 0);
            J$.N(721, 'dP', dP, 0);
            if (J$.X1(729, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var anObject = J$.X1(105, J$.W(97, 'anObject', J$.F(89, J$.R(73, 'require', require, 2), 0)(J$.T(81, './_an-object', 21, false)), anObject, 3));
            var IE8_DOM_DEFINE = J$.X1(145, J$.W(137, 'IE8_DOM_DEFINE', J$.F(129, J$.R(113, 'require', require, 2), 0)(J$.T(121, './_ie8-dom-define', 21, false)), IE8_DOM_DEFINE, 3));
            var toPrimitive = J$.X1(185, J$.W(177, 'toPrimitive', J$.F(169, J$.R(153, 'require', require, 2), 0)(J$.T(161, './_to-primitive', 21, false)), toPrimitive, 3));
            var dP = J$.X1(217, J$.W(209, 'dP', J$.G(201, J$.R(193, 'Object', Object, 2), 'defineProperty', 0), dP, 3));
            J$.X1(681, J$.P(673, J$.R(225, 'exports', exports, 2), 'f', J$.X1(777, J$.C(48, J$.F(249, J$.R(233, 'require', require, 2), 0)(J$.T(241, './_descriptors', 21, false)))) ? J$.G(265, J$.R(257, 'Object', Object, 2), 'defineProperty', 0) : J$.T(665, function defineProperty(O, P, Attributes) {
                jalangiLabel25:
                    while (true) {
                        try {
                            J$.Fe(617, arguments.callee, this, arguments);
                            arguments = J$.N(625, 'arguments', arguments, 4);
                            defineProperty = J$.N(633, 'defineProperty', defineProperty, 0);
                            O = J$.N(641, 'O', O, 4);
                            P = J$.N(649, 'P', P, 4);
                            Attributes = J$.N(657, 'Attributes', Attributes, 4);
                            J$.X1(297, J$.F(289, J$.R(273, 'anObject', anObject, 1), 0)(J$.R(281, 'O', O, 0)));
                            J$.X1(345, P = J$.W(337, 'P', J$.F(329, J$.R(305, 'toPrimitive', toPrimitive, 1), 0)(J$.R(313, 'P', P, 0), J$.T(321, true, 23, false)), P, 0));
                            J$.X1(377, J$.F(369, J$.R(353, 'anObject', anObject, 1), 0)(J$.R(361, 'Attributes', Attributes, 0)));
                            if (J$.X1(737, J$.C(16, J$.R(385, 'IE8_DOM_DEFINE', IE8_DOM_DEFINE, 1))))
                                try {
                                return J$.X1(441, J$.Rt(433, J$.F(425, J$.R(393, 'dP', dP, 1), 0)(J$.R(401, 'O', O, 0), J$.R(409, 'P', P, 0), J$.R(417, 'Attributes', Attributes, 0))));
                            } catch (e) {
                                e = J$.N(449, 'e', e, 1);
                            }
                            if (J$.X1(745, J$.C(32, J$.C(24, J$.B(18, 'in', J$.T(457, 'get', 21, false), J$.R(465, 'Attributes', Attributes, 0), 0)) ? J$._() : J$.B(26, 'in', J$.T(473, 'set', 21, false), J$.R(481, 'Attributes', Attributes, 0), 0))))
                                throw J$.X1(521, J$.Th(513, J$.F(505, J$.R(489, 'TypeError', TypeError, 2), 0)(J$.T(497, 'Accessors not supported!', 21, false))));
                            if (J$.X1(753, J$.C(40, J$.B(34, 'in', J$.T(529, 'value', 21, false), J$.R(537, 'Attributes', Attributes, 0), 0))))
                                J$.X1(585, J$.P(577, J$.R(545, 'O', O, 0), J$.R(553, 'P', P, 0), J$.G(569, J$.R(561, 'Attributes', Attributes, 0), 'value', 0), 2));
                            return J$.X1(609, J$.Rt(601, J$.R(593, 'O', O, 0)));
                        } catch (J$e) {
                            J$.Ex(761, J$e);
                        } finally {
                            if (J$.Fr(769))
                                continue jalangiLabel25;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 617), 0));
        } catch (J$e) {
            J$.Ex(785, J$e);
        } finally {
            if (J$.Sr(793)) {
                J$.L();
                continue jalangiLabel26;
            } else {
                J$.L();
                break jalangiLabel26;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
