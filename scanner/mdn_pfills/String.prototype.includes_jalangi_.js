J$.iids = {"8":[1,83,1,114],"9":[1,1,1,7],"10":[1,95,1,103],"16":[1,116,1,174],"17":[1,1,1,17],"18":[1,83,1,103],"24":[1,1,1,177],"25":[1,1,1,26],"26":[1,118,1,130],"33":[1,31,1,37],"34":[1,118,1,144],"41":[1,31,1,47],"42":[1,116,1,145],"49":[1,83,1,91],"50":[1,149,1,151],"57":[1,102,1,103],"58":[1,149,1,174],"65":[1,112,1,113],"73":[1,112,1,113],"81":[1,118,1,119],"89":[1,122,1,123],"97":[1,122,1,130],"105":[1,133,1,137],"113":[1,133,1,144],"121":[1,150,1,151],"129":[1,156,1,160],"137":[1,169,1,170],"145":[1,172,1,173],"153":[1,156,1,174],"155":[1,156,1,168],"161":[1,83,1,114],"169":[1,83,1,174],"177":[1,76,1,175],"185":[1,59,1,176],"193":[1,59,1,176],"201":[1,59,1,176],"209":[1,59,1,176],"217":[1,59,1,176],"225":[1,31,1,176],"233":[1,1,1,178],"241":[1,1,1,178],"249":[1,59,1,176],"257":[1,59,1,176],"265":[1,1,1,178],"273":[1,1,1,178],"nBranches":6,"originalCodeFileName":"/home/blake/corejs_tests/mdn_pfills/String.prototype.includes.js","instrumentedCodeFileName":"/home/blake/corejs_tests/mdn_pfills/String.prototype.includes_jalangi_.js","code":"String.prototype.includes||(String.prototype.includes=function(t,n){return\"number\"!=typeof n&&(n=0),!(n+t.length>this.length)&&-1!==this.indexOf(t,n)});\n"};
jalangiLabel15:
    while (true) {
        try {
            J$.Se(241, '/home/blake/corejs_tests/mdn_pfills/String.prototype.includes_jalangi_.js', '/home/blake/corejs_tests/mdn_pfills/String.prototype.includes.js');
            J$.X1(233, J$.C(24, J$.G(25, J$.G(17, J$.R(9, 'String', String, 2), 'prototype', 0), 'includes', 0)) ? J$._() : J$.P(225, J$.G(41, J$.R(33, 'String', String, 2), 'prototype', 0), 'includes', J$.T(217, function (t, n) {
                jalangiLabel14:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            arguments = J$.N(193, 'arguments', arguments, 4);
                            t = J$.N(201, 't', t, 4);
                            n = J$.N(209, 'n', n, 4);
                            return J$.X1(177, J$.Rt(169, (J$.X1(161, J$.C(8, J$.B(18, '!=', J$.T(49, "number", 21, false), J$.U(10, 'typeof', J$.R(57, 'n', n, 0)), 0)) ? n = J$.W(73, 'n', J$.T(65, 0, 22, false), n, 0) : J$._()), J$.C(16, J$.U(42, '!', J$.B(34, '>', J$.B(26, '+', J$.R(81, 'n', n, 0), J$.G(97, J$.R(89, 't', t, 0), 'length', 0), 0), J$.G(113, J$.R(105, 'this', this, 0), 'length', 0), 0))) ? J$.B(58, '!==', J$.U(50, '-', J$.T(121, 1, 22, false)), J$.M(153, J$.R(129, 'this', this, 0), 'indexOf', 0)(J$.R(137, 't', t, 0), J$.R(145, 'n', n, 0)), 0) : J$._())));
                        } catch (J$e) {
                            J$.Ex(249, J$e);
                        } finally {
                            if (J$.Fr(257))
                                continue jalangiLabel14;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 185), 0));
        } catch (J$e) {
            J$.Ex(265, J$e);
        } finally {
            if (J$.Sr(273)) {
                J$.L();
                continue jalangiLabel15;
            } else {
                J$.L();
                break jalangiLabel15;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
