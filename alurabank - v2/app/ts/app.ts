import { NegociacaoController } from './controllers/NegociacaoController';
const negociacoesController = new NegociacaoController();

$('.form').submit(negociacoesController.adiciona.bind(negociacoesController))
$('#botao-importa').click(negociacoesController.importaDados.bind(negociacoesController))
