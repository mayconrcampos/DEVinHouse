export class Pessoa {
    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade 
    }

    mostraPessoa(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade}`)
    }
}