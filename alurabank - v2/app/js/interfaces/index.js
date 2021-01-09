System.register(["./Igualavel", "./Imprimivel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Igualavel_1_1) {
                exportStar_1(Igualavel_1_1);
            },
            function (Imprimivel_1_1) {
                exportStar_1(Imprimivel_1_1);
            }
        ],
        execute: function () {
        }
    };
});
