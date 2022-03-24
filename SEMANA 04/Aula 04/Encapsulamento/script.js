
class Pessoa{
    #_nome 
    #_idade 
    constructor(nome, idade){
        this.#_nome = nome 
        this.#_idade = idade
    }

    set #nome(nome){
        this.#_nome = nome 
    }

    get #nome(){
        return this.#_nome 
    }

    set #idade(idade){
        this.#_idade = idade
    }

    get #idade(){
        return this.#_idade
    }

    mostrarNomeEidade(){
        console.log(`Nome: ${this.#nome} Idade: ${this.#idade}`)
    }

    setNome(nome){
        this.#nome = nome
    }

    getNome(){
        return this.#nome
    }

    setIdade(idade){
        this.#idade = idade
    }

    getIdade(){
        return this.#idade
    }
}

var maycon = new Pessoa("Maycon", 39)
console.log(maycon.nome)
maycon.mostrarNomeEidade()

var Ariana = new Pessoa("Ariana", 36)
console.log(Ariana.nome)
Ariana.nome = "Arianaa"
Ariana.idade = "Lindjo"
Ariana.mostrarNomeEidade()

maycon.setNome("Maycon R Campos")
maycon.setIdade(40)
console.log(maycon.getNome(), maycon.getIdade())

// Agora sim, sem utilização

