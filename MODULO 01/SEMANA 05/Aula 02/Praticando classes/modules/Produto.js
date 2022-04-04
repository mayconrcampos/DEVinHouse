export class Produto{
    #_nome 
    #_qtde 
    #_valor
    constructor(nome, qtde, valor){
        this.nome = nome 
        this.qtde = qtde 
        this.valor = valor 
    }
    set nome(nome){
        this.#_nome = nome 
    }
    get nome(){
        return this.#_nome
    }
    set qtde(qtde){
        this.#_qtde = qtde
    }
    get qtde(){
        return this.#_qtde
    }
    set valor(valor){
        this.#_valor = valor
    }
    get valor(){
        return this.#_valor
    }

}