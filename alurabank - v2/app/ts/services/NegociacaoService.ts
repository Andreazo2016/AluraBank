import { Negociacao } from "../models/index"

interface NegociacaoParcial {
    montante: number,
    vezes: number
}

interface HandlerFunction{
    (res:Response):Response;
}


export class NegociacaoService {
    obterNegociacao(handler: HandlerFunction): Promise<any | Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
            .catch(err => console.log(err))
    }
}