export class Pessoa{
    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade
    }

    imprimePessoa(){
        console.log(
            `Nome: ${this.nome} - Idade: ${this.idade}`
        )
    }
}