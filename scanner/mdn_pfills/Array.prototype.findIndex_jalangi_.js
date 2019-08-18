J$.iids = {"8":[1,114,1,126],"9":[1,1,1,6],"10":[1,114,1,126],"16":[1,225,1,247],"17":[1,1,1,16],"18":[1,206,1,220],"24":[1,361,1,379],"25":[1,1,1,26],"26":[1,239,1,247],"32":[1,335,1,340],"33":[1,30,1,36],"34":[1,225,1,247],"40":[1,1,1,409],"41":[1,52,1,57],"42":[1,335,1,340],"49":[1,52,1,67],"50":[1,390,1,393],"57":[1,69,1,80],"65":[1,114,1,118],"66":[1,390,1,393],"73":[1,122,1,126],"74":[1,402,1,404],"81":[1,138,1,147],"89":[1,148,1,179],"97":[1,134,1,180],"105":[1,134,1,180],"113":[1,128,1,181],"121":[1,189,1,195],"129":[1,196,1,200],"137":[1,189,1,201],"145":[1,206,1,207],"153":[1,206,1,214],"161":[1,219,1,220],"169":[1,189,1,201],"177":[1,189,1,201],"185":[1,206,1,220],"193":[1,206,1,220],"201":[1,225,1,235],"209":[1,246,1,247],"217":[1,259,1,268],"225":[1,269,1,299],"233":[1,255,1,300],"241":[1,255,1,300],"249":[1,249,1,301],"257":[1,314,1,323],"265":[1,324,1,325],"273":[1,314,1,326],"281":[1,332,1,333],"289":[1,314,1,326],"297":[1,314,1,326],"305":[1,332,1,333],"313":[1,332,1,333],"321":[1,335,1,336],"329":[1,339,1,340],"337":[1,352,1,353],"345":[1,354,1,355],"353":[1,352,1,356],"361":[1,352,1,356],"369":[1,352,1,356],"377":[1,361,1,362],"385":[1,368,1,369],"393":[1,371,1,372],"401":[1,374,1,375],"409":[1,377,1,378],"417":[1,361,1,379],"419":[1,361,1,367],"425":[1,388,1,389],"433":[1,388,1,389],"441":[1,381,1,390],"457":[1,390,1,391],"465":[1,390,1,393],"481":[1,390,1,394],"489":[1,403,1,404],"497":[1,402,1,404],"505":[1,395,1,405],"513":[1,91,1,406],"521":[1,91,1,406],"529":[1,91,1,406],"537":[1,91,1,406],"545":[1,91,1,406],"553":[1,91,1,406],"561":[1,91,1,406],"569":[1,91,1,406],"577":[1,91,1,406],"585":[1,91,1,406],"593":[1,82,1,408],"601":[1,30,1,409],"603":[1,30,1,51],"609":[1,1,1,410],"617":[1,1,1,410],"625":[1,110,1,181],"633":[1,221,1,301],"641":[1,357,1,390],"649":[1,301,1,395],"657":[1,91,1,406],"665":[1,91,1,406],"673":[1,1,1,410],"681":[1,1,1,410],"nBranches":10,"originalCodeFileName":"/home/blake/corejs_tests/mdn_pfills/Array.prototype.findIndex.js","instrumentedCodeFileName":"/home/blake/corejs_tests/mdn_pfills/Array.prototype.findIndex_jalangi_.js","code":"Array.prototype.findIndex||Object.defineProperty(Array.prototype,\"findIndex\",{value:function(r){if(null==this)throw new TypeError('\"this\" is null or not defined');var e=Object(this),t=e.length>>>0;if(\"function\"!=typeof r)throw new TypeError(\"predicate must be a function\");for(var n=arguments[1],o=0;o<t;){var i=e[o];if(r.call(n,i,o,e))return o;o++}return-1}});\n"};
jalangiLabel15:
    while (true) {
        try {
            J$.Se(617, '/home/blake/corejs_tests/mdn_pfills/Array.prototype.findIndex_jalangi_.js', '/home/blake/corejs_tests/mdn_pfills/Array.prototype.findIndex.js');
            J$.X1(609, J$.C(40, J$.G(25, J$.G(17, J$.R(9, 'Array', Array, 2), 'prototype', 0), 'findIndex', 0)) ? J$._() : J$.M(601, J$.R(33, 'Object', Object, 2), 'defineProperty', 0)(J$.G(49, J$.R(41, 'Array', Array, 2), 'prototype', 0), J$.T(57, "findIndex", 21, false), J$.T(593, {
                value: J$.T(585, function value(r) {
                    jalangiLabel14:
                        while (true) {
                            try {
                                J$.Fe(513, arguments.callee, this, arguments);
                                arguments = J$.N(521, 'arguments', arguments, 4);
                                value = J$.N(529, 'value', value, 0);
                                r = J$.N(537, 'r', r, 4);
                                J$.N(545, 'e', e, 0);
                                J$.N(553, 't', t, 0);
                                J$.N(561, 'n', n, 0);
                                J$.N(569, 'o', o, 0);
                                J$.N(577, 'i', i, 0);
                                if (J$.X1(625, J$.C(8, J$.B(10, '==', J$.T(65, null, 25, false), J$.R(73, 'this', this, 0), 0))))
                                    throw J$.X1(113, J$.Th(105, J$.F(97, J$.R(81, 'TypeError', TypeError, 2), 1)(J$.T(89, '"this" is null or not defined', 21, false))));
                                var e = J$.X1(177, J$.W(169, 'e', J$.F(137, J$.R(121, 'Object', Object, 2), 0)(J$.R(129, 'this', this, 0)), e, 1)), t = J$.X1(193, J$.W(185, 't', J$.B(18, '>>>', J$.G(153, J$.R(145, 'e', e, 0), 'length', 0), J$.T(161, 0, 22, false), 0), t, 1));
                                if (J$.X1(633, J$.C(16, J$.B(34, '!=', J$.T(201, "function", 21, false), J$.U(26, 'typeof', J$.R(209, 'r', r, 0)), 0))))
                                    throw J$.X1(249, J$.Th(241, J$.F(233, J$.R(217, 'TypeError', TypeError, 2), 1)(J$.T(225, "predicate must be a function", 21, false))));
                                for (var n = J$.X1(297, J$.W(289, 'n', J$.G(273, J$.R(257, 'arguments', arguments, 2), J$.T(265, 1, 22, false), 4), n, 1)), o = J$.X1(313, J$.W(305, 'o', J$.T(281, 0, 22, false), o, 1)); J$.X1(649, J$.C(32, J$.B(42, '<', J$.R(321, 'o', o, 0), J$.R(329, 't', t, 0), 0)));) {
                                    var i = J$.X1(369, J$.W(361, 'i', J$.G(353, J$.R(337, 'e', e, 0), J$.R(345, 'o', o, 0), 4), i, 1));
                                    if (J$.X1(641, J$.C(24, J$.M(417, J$.R(377, 'r', r, 0), 'call', 0)(J$.R(385, 'n', n, 0), J$.R(393, 'i', i, 0), J$.R(401, 'o', o, 0), J$.R(409, 'e', e, 0)))))
                                        return J$.X1(441, J$.Rt(433, J$.R(425, 'o', o, 0)));
                                    J$.X1(481, J$.B(66, '-', o = J$.W(465, 'o', J$.B(58, '+', J$.U(50, '+', J$.R(457, 'o', o, 0)), J$.T(449, 1, 22, false), 0), o, 0), J$.T(473, 1, 22, false), 0));
                                }
                                return J$.X1(505, J$.Rt(497, J$.U(74, '-', J$.T(489, 1, 22, false))));
                            } catch (J$e) {
                                J$.Ex(657, J$e);
                            } finally {
                                if (J$.Fr(665))
                                    continue jalangiLabel14;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 513)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(673, J$e);
        } finally {
            if (J$.Sr(681)) {
                J$.L();
                continue jalangiLabel15;
            } else {
                J$.L();
                break jalangiLabel15;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
