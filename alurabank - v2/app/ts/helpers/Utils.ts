import { Imprimivel } from "../interfaces/Imprimivel";

export function imprime(...objetos:Array<Imprimivel>){
    objetos.forEach(objeto => objeto.paraTexto());
}