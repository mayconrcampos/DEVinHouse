class Pessoa{
    nome 
    altura
    constructor(nome, altura){
        this.nome = nome
        this.altura = altura
    }

    set nome(nome){
        this.nome = nome
    }

    get nome(){
        return this.nome
    }

    set altura(alt){
        this.altura = alt
    }

    get altura(){
        return this.altura
    }

    mostraPessoa(){
        console.log(`Nome: ${this.nome} Altura: ${this.altura.toFixed(2)}m`)
    }
}

var pessoa = new Pessoa("Maycon", 1.70)
pessoa.mostraPessoa()