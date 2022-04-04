export class Pessoa {
    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade 
    }

    mostraPessoa(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade}`)
    }

    mostraPessoaNoHTML(){
        var p = document.createElement("p")
        p.innerHTML = `<strong>Nome</strong>: ${this.nome} - <strong>Idade</strong>: ${this.idade}`

        document.body.appendChild(p)
    }
}