J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"17":[1,6,1,17],"25":[2,5,2,11],"33":[2,19,2,26],"41":[2,27,2,31],"49":[2,19,2,32],"57":[2,5,2,32],"65":[2,5,2,33],"73":[4,22,4,24],"81":[4,22,4,39],"89":[4,22,4,39],"97":[4,22,4,39],"105":[5,1,5,7],"113":[6,12,6,26],"121":[6,32,6,34],"129":[6,36,6,39],"137":[6,12,6,40],"139":[6,12,6,31],"145":[6,12,6,40],"153":[6,5,6,41],"161":[5,18,7,2],"169":[5,18,7,2],"177":[5,18,7,2],"185":[5,18,7,2],"193":[5,18,7,2],"201":[5,1,7,2],"209":[5,1,7,3],"217":[1,1,7,3],"225":[1,1,7,3],"233":[1,1,3,2],"241":[5,18,7,2],"249":[5,18,7,2],"257":[1,1,7,3],"265":[1,1,7,3],"nBranches":2,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_has.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_has_jalangi_.js","code":"var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n"};
jalangiLabel48:
    while (true) {
        try {
            J$.Se(217, '/home/blake/CoreJSTesting/modules/_has_jalangi_.js', '/home/blake/CoreJSTesting/modules/_has.js');
            J$.N(225, 'hasOwnProperty', hasOwnProperty, 0);
            if (J$.X1(233, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var hasOwnProperty = J$.X1(97, J$.W(89, 'hasOwnProperty', J$.G(81, J$.T(73, {}, 11, false), 'hasOwnProperty', 0), hasOwnProperty, 3));
            J$.X1(209, J$.P(201, J$.R(105, 'module', module, 2), 'exports', J$.T(193, function (it, key) {
                jalangiLabel47:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            it = J$.N(177, 'it', it, 4);
                            key = J$.N(185, 'key', key, 4);
                            return J$.X1(153, J$.Rt(145, J$.M(137, J$.R(113, 'hasOwnProperty', hasOwnProperty, 1), 'call', 0)(J$.R(121, 'it', it, 0), J$.R(129, 'key', key, 0))));
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel47;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 161), 0));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel48;
            } else {
                J$.L();
                break jalangiLabel48;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
