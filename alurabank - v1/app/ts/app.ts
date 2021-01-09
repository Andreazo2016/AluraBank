const negociacoesController = new NegociacaoController();

$('.form').submit(negociacoesController.adiciona.bind(negociacoesController))
