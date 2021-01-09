import { Imprimivel,Igualavel } from "../interfaces/index";

export class Negociacao implements Imprimivel,Igualavel<Negociacao> {

    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) { }


    get volume(): number {
        return this._valor * this._quantidade;
    }

    get data(): Date {
        return this._data;
    }
    get quantidade(): number {
        return this._quantidade;
    }
    get valor(): number {
        return this._valor;
    }

    paraTexto(): void {
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        )
    }
    ehIgual(negociacao: Negociacao): boolean {

        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}