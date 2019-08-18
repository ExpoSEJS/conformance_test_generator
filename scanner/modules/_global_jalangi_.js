J$.iids = {"8":[1,5,1,17],"9":[1,6,1,12],"10":[1,5,1,17],"16":[4,31,4,82],"17":[1,6,1,17],"18":[4,31,4,44],"24":[4,94,4,141],"25":[2,5,2,11],"26":[4,31,4,59],"32":[4,94,4,141],"33":[2,19,2,26],"34":[4,63,4,82],"40":[4,31,4,82],"41":[2,27,2,31],"42":[4,94,4,105],"48":[5,5,5,27],"49":[2,19,2,32],"50":[4,94,4,120],"57":[2,5,2,32],"58":[4,124,4,141],"65":[2,5,2,33],"66":[5,5,5,15],"73":[4,14,4,20],"74":[5,5,5,27],"81":[4,38,4,44],"89":[4,48,4,59],"97":[4,63,4,69],"105":[4,63,4,74],"113":[4,78,4,82],"121":[4,85,4,91],"129":[4,101,4,105],"137":[4,109,4,120],"145":[4,124,4,128],"153":[4,124,4,133],"161":[4,137,4,141],"169":[4,144,4,148],"177":[4,151,4,159],"185":[4,160,4,173],"193":[4,151,4,174],"201":[4,151,4,176],"209":[4,14,4,176],"217":[4,14,4,176],"225":[4,14,4,176],"233":[5,12,5,15],"241":[5,19,5,27],"249":[6,11,6,17],"257":[6,11,6,17],"265":[6,5,6,18],"273":[1,1,6,18],"281":[1,1,6,18],"289":[1,1,3,2],"297":[4,94,4,176],"305":[4,31,4,176],"313":[5,1,6,18],"321":[1,1,6,18],"329":[1,1,6,18],"nBranches":12,"originalCodeFileName":"/home/blake/CoreJSTesting/modules/_global.js","instrumentedCodeFileName":"/home/blake/CoreJSTesting/modules/_global_jalangi_.js","code":"// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n"};
jalangiLabel18:
    while (true) {
        try {
            J$.Se(273, '/home/blake/CoreJSTesting/modules/_global_jalangi_.js', '/home/blake/CoreJSTesting/modules/_global.js');
            J$.N(281, 'global', global, 0);
            if (J$.X1(289, J$.C(8, J$.U(10, '!', J$.G(17, J$.R(9, 'Object', Object, 2), '_s$_', 0))))) {
                J$.X1(65, J$.P(57, J$.R(25, 'Object', Object, 2), '_s$_', J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'S$', 21, false)), 0));
            }
            var global = J$.X1(225, J$.W(217, 'global', J$.P(209, J$.R(73, 'module', module, 2), 'exports', J$.X1(305, J$.C(40, J$.C(16, J$.B(26, '!=', J$.U(18, 'typeof', J$.I(typeof window === 'undefined' ? J$.R(81, 'window', undefined, 2) : J$.R(81, 'window', window, 2))), J$.T(89, 'undefined', 21, false), 0)) ? J$.B(34, '==', J$.G(105, J$.R(97, 'window', window, 2), 'Math', 0), J$.R(113, 'Math', Math, 2), 0) : J$._())) ? J$.R(121, 'window', window, 2) : J$.X1(297, J$.C(32, J$.C(24, J$.B(50, '!=', J$.U(42, 'typeof', J$.I(typeof self === 'undefined' ? J$.R(129, 'self', undefined, 2) : J$.R(129, 'self', self, 2))), J$.T(137, 'undefined', 21, false), 0)) ? J$.B(58, '==', J$.G(153, J$.R(145, 'self', self, 2), 'Math', 0), J$.R(161, 'Math', Math, 2), 0) : J$._())) ? J$.R(169, 'self', self, 2) : J$.F(201, J$.F(193, J$.R(177, 'Function', Function, 2), 0)(J$.T(185, 'return this', 21, false)), 0)(), 0), global, 3));
            if (J$.X1(313, J$.C(48, J$.B(74, '==', J$.U(66, 'typeof', J$.I(typeof __g === 'undefined' ? J$.R(233, '__g', undefined, 2) : J$.R(233, '__g', __g, 2))), J$.T(241, 'number', 21, false), 0))))
                J$.X1(265, __g = J$.W(257, '__g', J$.R(249, 'global', global, 1), J$.I(typeof __g === 'undefined' ? undefined : __g), 4));
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel18;
            } else {
                J$.L();
                break jalangiLabel18;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
