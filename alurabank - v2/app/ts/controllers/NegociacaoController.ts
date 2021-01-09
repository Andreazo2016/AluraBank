import { Negociacao, Negociacoes } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/NegociacaoService';
import {imprime} from '../helpers/Utils';

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}



export class NegociacaoController {

    /**
     * Typescript possui um tipo para representar os elementos do HTML, ele usa o tipo genérico: Element. 
     * Porque no método querySelector, retorna diferentes tipos de elemento, ai o typescript crieou um tipo genérico.
     * o Tipo HTMLInputElement é um tipo específico de elemento para input derivado do tipo Element. Existe HtmlButtonInput para butão, HTMLAnchorInput para ancora, HTMLFormInput para form, etc..
     * 
    

    private _inputData:HTMLInputElement;
    private _inputQuantidade:HTMLInputElement;
    private _inputValor:HTMLInputElement;
    private _negociacoes:Negociacoes = new Negociacoes();
    private _negociacoesView:NegociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView:MensagemView = new MensagemView('#mensagemView');
     */

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');
    private _negociacaoService: NegociacaoService = new NegociacaoService()


    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {


        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias uteis.');
            return
        }
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        imprime(negociacao);
        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adiciada com sucesso!');
    }

    private _ehDiaUtil(data: Date): boolean {
        return data.getDay() !== DiaDaSemana.Sabado && data.getDay() !== DiaDaSemana.Domingo;
    }

    /**Decorator para o padrão throttle: Evitara múltiplas requisições ao mesmo tempo */
    @throttle()
    importaDados() {
        function isOk(res: Response) {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        this._negociacaoService.obterNegociacao(isOk)
        .then(negociacoesParaImportar => {

            const negociacoesJaImportadas = this._negociacoes.paraArray();

            negociacoesParaImportar
                .filter((negociacao:Negociacao) => 
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.ehIgual(jaImportada)))
                .forEach((negociacao:Negociacao) => 
                this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);
        });

    }

}
