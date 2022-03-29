
export default class Pessoa {
    #_cpf
    constructor(nome, cpf){
        this.nome = nome 
        this.#cpf = cpf
    }

    set #cpf(cpf){
        this.#_cpf = cpf
    }

    get #cpf(){
        return this.#_cpf
    }

    imprime(){
        return `Nome: ${this.nome} CPF: ${this.#cpf}`
    }

}

