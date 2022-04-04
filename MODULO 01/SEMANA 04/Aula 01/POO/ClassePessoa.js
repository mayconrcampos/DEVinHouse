// Objetos

/*const pessoa = {
    nome: "Maycon",
    sexo: "M",
    Altura: 1.70,
    RG: "4.265.267-7",
    CPF: "037.721.379-97",
    est_civil: "Casado"
}*/

//console.log(pessoa.nome)

class Pessoa {
    constructor(nome, sexo, altura) {
        this.setNome(nome)
        this.setSexo(sexo)
        this.setAltura(altura)
    }

    setNome(nome){
        this.nome = nome
    }

    getNome(){
        return this.nome
    }

    setSexo(sexo){
        this.sexo = sexo
    }

    getSexo(){
        return this.sexo
    }

    setAltura(altura){
        this.altura = altura
    }

    getAltura(){
        return this.altura
    }

    imprimePessoa(){
        console.log("-=-=-=-=-=----=-=--=--=-=-=")
        console.log(`Nome: ${this.getNome()}`)
        console.log(`Sexo: ${this.getSexo()}`)
        console.log(`Altura: ${this.getAltura()}`)
        console.log("-=-=-=-=-=----=-=--=--=-=-=")
    }
}


var pessoa = new Pessoa("Maycon", "M", 1.70)

pessoa.imprimePessoa()

var pessoa1 = new Pessoa("Ariana", "F", 1.55)

pessoa1.imprimePessoa()

