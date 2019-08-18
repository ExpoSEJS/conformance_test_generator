J$.iids = {"8":[1,83,1,98],"9":[1,1,1,7],"10":[1,83,1,98],"16":[1,1,1,171],"17":[1,1,1,17],"18":[1,106,1,107],"25":[1,1,1,26],"26":[1,139,1,151],"33":[1,31,1,37],"34":[1,127,1,168],"41":[1,31,1,47],"49":[1,83,1,84],"57":[1,87,1,91],"65":[1,87,1,98],"73":[1,106,1,107],"81":[1,101,1,102],"89":[1,101,1,107],"97":[1,114,1,118],"105":[1,114,1,125],"113":[1,114,1,125],"121":[1,127,1,131],"129":[1,139,1,140],"137":[1,143,1,144],"145":[1,143,1,151],"153":[1,153,1,154],"161":[1,153,1,161],"169":[1,127,1,162],"171":[1,127,1,138],"177":[1,167,1,168],"185":[1,83,1,125],"193":[1,83,1,168],"201":[1,76,1,169],"209":[1,59,1,170],"217":[1,59,1,170],"225":[1,59,1,170],"233":[1,59,1,170],"241":[1,59,1,170],"249":[1,31,1,170],"257":[1,1,1,172],"265":[1,1,1,172],"273":[1,83,1,125],"281":[1,59,1,170],"289":[1,59,1,170],"297":[1,1,1,172],"305":[1,1,1,172],"nBranches":4,"originalCodeFileName":"/home/blake/corejs_tests/mdn_pfills/String.prototype.endsWith.js","instrumentedCodeFileName":"/home/blake/corejs_tests/mdn_pfills/String.prototype.endsWith_jalangi_.js","code":"String.prototype.endsWith||(String.prototype.endsWith=function(t,n){return n<this.length?n|=0:n=this.length,this.substr(n-t.length,t.length)===t});\n"};
jalangiLabel15:
    while (true) {
        try {
            J$.Se(265, '/home/blake/corejs_tests/mdn_pfills/String.prototype.endsWith_jalangi_.js', '/home/blake/corejs_tests/mdn_pfills/String.prototype.endsWith.js');
            J$.X1(257, J$.C(16, J$.G(25, J$.G(17, J$.R(9, 'String', String, 2), 'prototype', 0), 'endsWith', 0)) ? J$._() : J$.P(249, J$.G(41, J$.R(33, 'String', String, 2), 'prototype', 0), 'endsWith', J$.T(241, function (t, n) {
                jalangiLabel14:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            t = J$.N(225, 't', t, 4);
                            n = J$.N(233, 'n', n, 4);
                            return J$.X1(201, J$.Rt(193, (J$.X1(185, J$.X1(273, J$.C(8, J$.B(10, '<', J$.R(49, 'n', n, 0), J$.G(65, J$.R(57, 'this', this, 0), 'length', 0), 0))) ? n = J$.W(89, 'n', J$.B(18, '|', J$.R(81, 'n', n, 0), J$.T(73, 0, 22, false), 0), n, 0) : n = J$.W(113, 'n', J$.G(105, J$.R(97, 'this', this, 0), 'length', 0), n, 0)), J$.B(34, '===', J$.M(169, J$.R(121, 'this', this, 0), 'substr', 0)(J$.B(26, '-', J$.R(129, 'n', n, 0), J$.G(145, J$.R(137, 't', t, 0), 'length', 0), 0), J$.G(161, J$.R(153, 't', t, 0), 'length', 0)), J$.R(177, 't', t, 0), 0))));
                        } catch (J$e) {
                            J$.Ex(281, J$e);
                        } finally {
                            if (J$.Fr(289))
                                continue jalangiLabel14;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 209), 0));
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel15;
            } else {
                J$.L();
                break jalangiLabel15;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
