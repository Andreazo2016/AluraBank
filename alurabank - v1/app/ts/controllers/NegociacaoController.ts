class NegociacaoController{

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

    private _inputData:JQuery;
    private _inputQuantidade:JQuery;
    private _inputValor:JQuery;
    private _negociacoes:Negociacoes = new Negociacoes();
    private _negociacoesView:NegociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView:MensagemView = new MensagemView('#mensagemView');
    

    constructor(){
        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event:Event){
        event.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g,',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adiciada com sucesso!');
    }

}