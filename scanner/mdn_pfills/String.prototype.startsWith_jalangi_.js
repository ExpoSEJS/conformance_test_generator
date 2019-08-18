J$.iids = {"8":[1,91,1,97],"9":[1,1,1,7],"10":[1,99,1,129],"16":[1,1,1,132],"17":[1,1,1,17],"25":[1,1,1,28],"33":[1,33,1,39],"41":[1,33,1,49],"49":[1,91,1,92],"57":[1,96,1,97],"65":[1,91,1,97],"73":[1,99,1,103],"81":[1,111,1,112],"89":[1,114,1,115],"97":[1,114,1,122],"105":[1,99,1,123],"107":[1,99,1,110],"113":[1,128,1,129],"121":[1,87,1,97],"129":[1,87,1,129],"137":[1,80,1,130],"145":[1,63,1,131],"153":[1,63,1,131],"161":[1,63,1,131],"169":[1,63,1,131],"177":[1,63,1,131],"185":[1,33,1,131],"193":[1,1,1,133],"201":[1,1,1,133],"209":[1,63,1,131],"217":[1,63,1,131],"225":[1,1,1,133],"233":[1,1,1,133],"nBranches":4,"originalCodeFileName":"/home/blake/corejs_tests/mdn_pfills/String.prototype.startsWith.js","instrumentedCodeFileName":"/home/blake/corejs_tests/mdn_pfills/String.prototype.startsWith_jalangi_.js","code":"String.prototype.startsWith||(String.prototype.startsWith=function(t,r){return r=r||0,this.substr(r,t.length)===t});\n"};
jalangiLabel15:
    while (true) {
        try {
            J$.Se(201, '/home/blake/corejs_tests/mdn_pfills/String.prototype.startsWith_jalangi_.js', '/home/blake/corejs_tests/mdn_pfills/String.prototype.startsWith.js');
            J$.X1(193, J$.C(16, J$.G(25, J$.G(17, J$.R(9, 'String', String, 2), 'prototype', 0), 'startsWith', 0)) ? J$._() : J$.P(185, J$.G(41, J$.R(33, 'String', String, 2), 'prototype', 0), 'startsWith', J$.T(177, function (t, r) {
                jalangiLabel14:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            t = J$.N(161, 't', t, 4);
                            r = J$.N(169, 'r', r, 4);
                            return J$.X1(137, J$.Rt(129, (J$.X1(121, r = J$.W(65, 'r', J$.C(8, J$.R(49, 'r', r, 0)) ? J$._() : J$.T(57, 0, 22, false), r, 0)), J$.B(10, '===', J$.M(105, J$.R(73, 'this', this, 0), 'substr', 0)(J$.R(81, 'r', r, 0), J$.G(97, J$.R(89, 't', t, 0), 'length', 0)), J$.R(113, 't', t, 0), 0))));
                        } catch (J$e) {
                            J$.Ex(209, J$e);
                        } finally {
                            if (J$.Fr(217))
                                continue jalangiLabel14;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 145), 0));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel15;
            } else {
                J$.L();
                break jalangiLabel15;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
