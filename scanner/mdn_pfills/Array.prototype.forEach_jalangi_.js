J$.iids = {"8":[1,76,1,87],"9":[1,1,1,6],"10":[1,76,1,87],"16":[1,177,1,197],"17":[1,1,1,16],"18":[1,161,1,173],"24":[1,246,1,271],"25":[1,1,1,24],"26":[1,189,1,197],"32":[1,288,1,320],"33":[1,27,1,32],"34":[1,177,1,197],"40":[1,276,1,279],"41":[1,27,1,42],"42":[1,218,1,240],"48":[1,1,1,327],"49":[1,76,1,80],"50":[1,246,1,264],"57":[1,83,1,87],"58":[1,276,1,279],"65":[1,98,1,107],"66":[1,288,1,294],"73":[1,108,1,138],"74":[1,321,1,324],"81":[1,94,1,139],"89":[1,94,1,139],"90":[1,321,1,324],"97":[1,88,1,140],"105":[1,146,1,152],"113":[1,153,1,157],"121":[1,146,1,158],"129":[1,161,1,162],"137":[1,161,1,169],"145":[1,172,1,173],"153":[1,146,1,158],"161":[1,146,1,158],"169":[1,161,1,173],"177":[1,161,1,173],"185":[1,177,1,187],"193":[1,196,1,197],"201":[1,208,1,217],"209":[1,218,1,219],"217":[1,220,1,240],"225":[1,204,1,241],"233":[1,204,1,241],"241":[1,198,1,242],"249":[1,246,1,247],"257":[1,248,1,257],"265":[1,248,1,264],"273":[1,269,1,270],"281":[1,269,1,270],"289":[1,274,1,275],"297":[1,274,1,275],"305":[1,246,1,271],"313":[1,276,1,277],"321":[1,278,1,279],"329":[1,288,1,289],"337":[1,293,1,294],"345":[1,299,1,300],"353":[1,301,1,302],"361":[1,299,1,303],"369":[1,299,1,303],"377":[1,304,1,305],"385":[1,311,1,312],"393":[1,313,1,314],"401":[1,315,1,316],"409":[1,317,1,318],"417":[1,304,1,319],"419":[1,304,1,310],"425":[1,297,1,303],"441":[1,321,1,322],"449":[1,321,1,324],"465":[1,288,1,320],"473":[1,288,1,324],"481":[1,51,1,326],"489":[1,51,1,326],"497":[1,51,1,326],"505":[1,51,1,326],"513":[1,51,1,326],"521":[1,51,1,326],"529":[1,51,1,326],"537":[1,51,1,326],"545":[1,51,1,326],"553":[1,51,1,326],"561":[1,27,1,326],"569":[1,1,1,328],"577":[1,1,2,1],"585":[1,73,1,140],"593":[1,174,1,242],"601":[1,242,1,325],"609":[1,242,1,325],"617":[1,51,1,326],"625":[1,51,1,326],"633":[1,1,2,1],"641":[1,1,2,1],"nBranches":12,"originalCodeFileName":"/home/blake/corejs_tests/mdn_pfills/Array.prototype.forEach.js","instrumentedCodeFileName":"/home/blake/corejs_tests/mdn_pfills/Array.prototype.forEach_jalangi_.js","code":"Array.prototype.forEach||(Array.prototype.forEach=function(r,o){var t,n;if(null===this)throw new TypeError(\" this is null or not defined\");var e=Object(this),i=e.length>>>0;if(\"function\"!=typeof r)throw new TypeError(r+\" is not a function\");for(1<arguments.length&&(t=o),n=0;n<i;){var f;n in e&&(f=e[n],r.call(t,f,n,e)),n++}});\n"};
jalangiLabel14:
    while (true) {
        try {
            J$.Se(577, '/home/blake/corejs_tests/mdn_pfills/Array.prototype.forEach_jalangi_.js', '/home/blake/corejs_tests/mdn_pfills/Array.prototype.forEach.js');
            J$.X1(569, J$.C(48, J$.G(25, J$.G(17, J$.R(9, 'Array', Array, 2), 'prototype', 0), 'forEach', 0)) ? J$._() : J$.P(561, J$.G(41, J$.R(33, 'Array', Array, 2), 'prototype', 0), 'forEach', J$.T(553, function (r, o) {
                jalangiLabel13:
                    while (true) {
                        try {
                            J$.Fe(481, arguments.callee, this, arguments);
                            arguments = J$.N(489, 'arguments', arguments, 4);
                            r = J$.N(497, 'r', r, 4);
                            o = J$.N(505, 'o', o, 4);
                            J$.N(513, 't', t, 0);
                            J$.N(521, 'n', n, 0);
                            J$.N(529, 'e', e, 0);
                            J$.N(537, 'i', i, 0);
                            J$.N(545, 'f', f, 0);
                            var t, n;
                            if (J$.X1(585, J$.C(8, J$.B(10, '===', J$.T(49, null, 25, false), J$.R(57, 'this', this, 0), 0))))
                                throw J$.X1(97, J$.Th(89, J$.F(81, J$.R(65, 'TypeError', TypeError, 2), 1)(J$.T(73, " this is null or not defined", 21, false))));
                            var e = J$.X1(161, J$.W(153, 'e', J$.F(121, J$.R(105, 'Object', Object, 2), 0)(J$.R(113, 'this', this, 0)), e, 1)), i = J$.X1(177, J$.W(169, 'i', J$.B(18, '>>>', J$.G(137, J$.R(129, 'e', e, 0), 'length', 0), J$.T(145, 0, 22, false), 0), i, 1));
                            if (J$.X1(593, J$.C(16, J$.B(34, '!=', J$.T(185, "function", 21, false), J$.U(26, 'typeof', J$.R(193, 'r', r, 0)), 0))))
                                throw J$.X1(241, J$.Th(233, J$.F(225, J$.R(201, 'TypeError', TypeError, 2), 1)(J$.B(42, '+', J$.R(209, 'r', r, 0), J$.T(217, " is not a function", 21, false), 0))));
                            for (J$.X1(609, (J$.X1(305, J$.C(24, J$.B(50, '<', J$.T(249, 1, 22, false), J$.G(265, J$.R(257, 'arguments', arguments, 2), 'length', 0), 0)) ? t = J$.W(281, 't', J$.R(273, 'o', o, 0), t, 0) : J$._()), n = J$.W(297, 'n', J$.T(289, 0, 22, false), n, 0))); J$.X1(601, J$.C(40, J$.B(58, '<', J$.R(313, 'n', n, 0), J$.R(321, 'i', i, 0), 0)));) {
                                var f;
                                J$.X1(473, (J$.X1(465, J$.C(32, J$.B(66, 'in', J$.R(329, 'n', n, 0), J$.R(337, 'e', e, 0), 0)) ? (J$.X1(425, f = J$.W(369, 'f', J$.G(361, J$.R(345, 'e', e, 0), J$.R(353, 'n', n, 0), 4), f, 0)), J$.M(417, J$.R(377, 'r', r, 0), 'call', 0)(J$.R(385, 't', t, 0), J$.R(393, 'f', f, 0), J$.R(401, 'n', n, 0), J$.R(409, 'e', e, 0))) : J$._()), J$.B(90, '-', n = J$.W(449, 'n', J$.B(82, '+', J$.U(74, '+', J$.R(441, 'n', n, 0)), J$.T(433, 1, 22, false), 0), n, 0), J$.T(457, 1, 22, false), 0)));
                            }
                        } catch (J$e) {
                            J$.Ex(617, J$e);
                        } finally {
                            if (J$.Fr(625))
                                continue jalangiLabel13;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 481), 0));
        } catch (J$e) {
            J$.Ex(633, J$e);
        } finally {
            if (J$.Sr(641)) {
                J$.L();
                continue jalangiLabel14;
            } else {
                J$.L();
                break jalangiLabel14;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
