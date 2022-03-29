export default class Produto{
    #_nome 
    #_quantidade 
    #_valor 
    constructor(nome, qtde, valor){
        this.#nome = nome 
        this.#quantidade = qtde 
        this.#valor = valor
    }
    set #nome(nome){
        this.#_nome = nome
    }
    get #nome(){
        return this.#_nome
    }
    set #quantidade(qtde){
        this.#_quantidade = qtde
    }
    get quantidade(){
        return this.#_quantidade
    }
    set #valor(valor){
        this.#_valor = valor
    }
    get valor(){
        return this.#_valor
    }

    
}