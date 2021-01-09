System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var NegociacaoController_1, negociacoesController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            negociacoesController = new NegociacaoController_1.NegociacaoController();
            $('.form').submit(negociacoesController.adiciona.bind(negociacoesController));
            $('#botao-importa').click(negociacoesController.importaDados.bind(negociacoesController));
        }
    };
});
