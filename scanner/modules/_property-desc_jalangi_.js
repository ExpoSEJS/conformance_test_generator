J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"17":[1,6,1,17],"18":[6,23,6,33],"25":[2,5,2,11],"26":[6,21,6,34],"33":[2,19,2,26],"34":[7,25,7,35],"41":[2,27,2,31],"42":[7,23,7,36],"49":[2,19,2,32],"50":[8,21,8,31],"57":[2,5,2,32],"58":[8,19,8,32],"65":[2,5,2,33],"73":[4,1,4,7],"81":[6,23,6,29],"89":[6,32,6,33],"97":[7,25,7,31],"105":[7,34,7,35],"113":[8,21,8,27],"121":[8,30,8,31],"129":[9,16,9,21],"137":[5,12,10,6],"145":[5,12,10,6],"153":[5,5,10,7],"161":[4,18,11,2],"169":[4,18,11,2],"177":[4,18,11,2],"185":[4,18,11,2],"193":[4,18,11,2],"201":[4,1,11,2],"209":[4,1,11,3],"217":[1,1,11,3],"225":[1,1,3,2],"233":[4,18,11,2],"241":[4,18,11,2],"249":[1,1,11,3],"257":[1,1,11,3],"nBranches":2,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_property-desc.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_property-desc_jalangi_.js","code":"module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n"};
jalangiLabel42:
    while (true) {
        try {
            J$.Se(217, '/home/blake/CoreJSTesting/modules/_property-desc_jalangi_.js', '/home/blake/CoreJSTesting/modules/_property-desc.js');
            if (J$.X1(225, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            J$.X1(209, J$.P(201, J$.R(73, 'module', module, 2), 'exports', J$.T(193, function (bitmap, value) {
                jalangiLabel41:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            bitmap = J$.N(177, 'bitmap', bitmap, 4);
                            value = J$.N(185, 'value', value, 4);
                            return J$.X1(153, J$.Rt(145, J$.T(137, {
                                enumerable: J$.U(26, '!', J$.B(18, '&', J$.R(81, 'bitmap', bitmap, 0), J$.T(89, 1, 22, false), 0)),
                                configurable: J$.U(42, '!', J$.B(34, '&', J$.R(97, 'bitmap', bitmap, 0), J$.T(105, 2, 22, false), 0)),
                                writable: J$.U(58, '!', J$.B(50, '&', J$.R(113, 'bitmap', bitmap, 0), J$.T(121, 4, 22, false), 0)),
                                value: J$.R(129, 'value', value, 0)
                            }, 11, false)));
                        } catch (J$e) {
                            J$.Ex(233, J$e);
                        } finally {
                            if (J$.Fr(241))
                                continue jalangiLabel41;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 161), 0));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel42;
            } else {
                J$.L();
                break jalangiLabel42;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
