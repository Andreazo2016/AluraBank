export function domInject(seletor: string) {


    return function (target: any, key: string) {
        let elemento: JQuery;
        /**
         * Essa função vai buscar elemento no dom
        */
        const getter = function () {
            if (!elemento) {
                console.log(`Buscando ${seletor} para injetar em ${key}`);
                elemento = $(seletor)
            }
            return elemento;
        }
        /**
         * Esse Object vai injetar na propriedade 
         * que foi anotada o Elemento buscado do DOM
         */
        Object.defineProperty(target, key, {
            get: getter
        })



    }
}