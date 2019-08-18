J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[10,79,10,99],"17":[1,6,1,17],"18":[8,21,8,72],"25":[2,5,2,11],"26":[8,9,8,72],"33":[2,19,2,26],"34":[10,79,10,99],"41":[2,27,2,31],"42":[10,18,10,127],"49":[2,19,2,32],"50":[10,17,10,127],"57":[2,5,2,32],"58":[10,16,10,127],"65":[2,5,2,33],"73":[4,1,4,13],"81":[4,1,4,14],"89":[5,15,5,22],"97":[5,23,5,34],"105":[5,15,5,35],"113":[5,15,5,35],"121":[5,15,5,35],"129":[6,15,6,22],"137":[6,23,6,42],"145":[6,15,6,43],"153":[6,15,6,43],"161":[6,15,6,43],"169":[7,16,7,26],"177":[7,16,7,26],"185":[7,16,7,26],"193":[8,1,8,8],"201":[8,9,8,16],"209":[8,9,8,18],"217":[8,21,8,28],"225":[8,21,8,30],"233":[8,33,8,40],"241":[8,41,8,61],"249":[8,33,8,62],"257":[8,63,8,71],"265":[8,33,8,72],"273":[8,74,8,82],"281":[10,19,10,26],"289":[10,27,10,31],"297":[10,33,10,45],"305":[10,47,10,55],"313":[10,19,10,56],"321":[10,65,10,77],"329":[10,79,10,88],"337":[10,79,10,95],"345":[10,98,10,99],"353":[10,102,10,111],"361":[10,112,10,113],"369":[10,102,10,114],"377":[10,117,10,126],"385":[10,19,10,127],"387":[10,19,10,64],"393":[10,16,10,127],"401":[10,9,10,128],"409":[9,15,11,6],"417":[9,15,11,6],"425":[9,15,11,6],"433":[9,15,11,6],"441":[9,15,11,6],"449":[8,84,12,2],"457":[8,1,12,3],"465":[8,1,12,4],"473":[1,1,12,4],"481":[1,1,12,4],"489":[1,1,12,4],"497":[1,1,12,4],"505":[1,1,3,2],"513":[10,79,10,126],"521":[9,15,11,6],"529":[9,15,11,6],"537":[1,1,12,4],"545":[1,1,12,4],"nBranches":4,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/es6.string.includes.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/es6.string.includes_jalangi_.js","code":"// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n'use strict';\nvar $export = require('./_export');\nvar context = require('./_string-context');\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n"};
jalangiLabel15:
    while (true) {
        try {
            J$.Se(473, '/home/blake/CoreJSTesting/modules/es6.string.includes_jalangi_.js', '/home/blake/CoreJSTesting/modules/es6.string.includes.js');
            J$.N(481, '$export', $export, 0);
            J$.N(489, 'context', context, 0);
            J$.N(497, 'INCLUDES', INCLUDES, 0);
            if (J$.X1(505, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            J$.X1(81, J$.T(73, 'use strict', 21, false));
            var $export = J$.X1(121, J$.W(113, '$export', J$.F(105, J$.R(89, 'require', require, 2), 0)(J$.T(97, './_export', 21, false)), $export, 3));
            var context = J$.X1(161, J$.W(153, 'context', J$.F(145, J$.R(129, 'require', require, 2), 0)(J$.T(137, './_string-context', 21, false)), context, 3));
            var INCLUDES = J$.X1(185, J$.W(177, 'INCLUDES', J$.T(169, 'includes', 21, false), INCLUDES, 3));
            J$.X1(465, J$.F(457, J$.R(193, '$export', $export, 1), 0)(J$.B(26, '+', J$.G(209, J$.R(201, '$export', $export, 1), 'P', 0), J$.B(18, '*', J$.G(225, J$.R(217, '$export', $export, 1), 'F', 0), J$.F(265, J$.F(249, J$.R(233, 'require', require, 2), 0)(J$.T(241, './_fails-is-regexp', 21, false)), 0)(J$.R(257, 'INCLUDES', INCLUDES, 1)), 0), 0), J$.T(273, 'String', 21, false), J$.T(449, {
                includes: J$.T(441, function includes(searchString) {
                    jalangiLabel14:
                        while (true) {
                            try {
                                J$.Fe(409, arguments.callee, this, arguments);
                                arguments = J$.N(417, 'arguments', arguments, 4);
                                includes = J$.N(425, 'includes', includes, 0);
                                searchString = J$.N(433, 'searchString', searchString, 4);
                                return J$.X1(401, J$.Rt(393, J$.U(58, '!', J$.U(50, '!', J$.U(42, '~', J$.M(385, J$.F(313, J$.R(281, 'context', context, 1), 0)(J$.R(289, 'this', this, 0), J$.R(297, 'searchString', searchString, 0), J$.R(305, 'INCLUDES', INCLUDES, 1)), 'indexOf', 0)(J$.R(321, 'searchString', searchString, 0), J$.X1(513, J$.C(16, J$.B(34, '>', J$.G(337, J$.R(329, 'arguments', arguments, 2), 'length', 0), J$.T(345, 1, 22, false), 0))) ? J$.G(369, J$.R(353, 'arguments', arguments, 2), J$.T(361, 1, 22, false), 4) : J$.T(377, undefined, 24, false)))))));
                            } catch (J$e) {
                                J$.Ex(521, J$e);
                            } finally {
                                if (J$.Fr(529))
                                    continue jalangiLabel14;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 409)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(537, J$e);
        } finally {
            if (J$.Sr(545)) {
                J$.L();
                continue jalangiLabel15;
            } else {
                J$.L();
                break jalangiLabel15;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
