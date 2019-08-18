J$.iids = {"8":[1,1,1,128],"9":[1,1,1,7],"17":[1,1,1,17],"25":[1,1,1,22],"33":[1,27,1,33],"41":[1,27,1,43],"49":[1,71,1,75],"57":[1,84,1,120],"65":[1,122,1,124],"73":[1,71,1,125],"75":[1,71,1,83],"81":[1,71,1,125],"89":[1,64,1,126],"97":[1,51,1,127],"105":[1,51,1,127],"113":[1,51,1,127],"121":[1,27,1,127],"129":[1,1,1,129],"137":[1,1,1,129],"145":[1,51,1,127],"153":[1,51,1,127],"161":[1,1,1,129],"169":[1,1,1,129],"nBranches":2,"originalCodeFileName":"/home/blake/corejs_tests/mdn_pfills/String.prototype.trim.js","instrumentedCodeFileName":"/home/blake/corejs_tests/mdn_pfills/String.prototype.trim_jalangi_.js","code":"String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,\"\")});\n"};
jalangiLabel15:
    while (true) {
        try {
            J$.Se(137, '/home/blake/corejs_tests/mdn_pfills/String.prototype.trim_jalangi_.js', '/home/blake/corejs_tests/mdn_pfills/String.prototype.trim.js');
            J$.X1(129, J$.C(8, J$.G(25, J$.G(17, J$.R(9, 'String', String, 2), 'prototype', 0), 'trim', 0)) ? J$._() : J$.P(121, J$.G(41, J$.R(33, 'String', String, 2), 'prototype', 0), 'trim', J$.T(113, function () {
                jalangiLabel14:
                    while (true) {
                        try {
                            J$.Fe(97, arguments.callee, this, arguments);
                            arguments = J$.N(105, 'arguments', arguments, 4);
                            return J$.X1(89, J$.Rt(81, J$.M(73, J$.R(49, 'this', this, 0), 'replace', 0)(J$.T(57, /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, 14, false), J$.T(65, "", 21, false))));
                        } catch (J$e) {
                            J$.Ex(145, J$e);
                        } finally {
                            if (J$.Fr(153))
                                continue jalangiLabel14;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 97), 0));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel15;
            } else {
                J$.L();
                break jalangiLabel15;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
