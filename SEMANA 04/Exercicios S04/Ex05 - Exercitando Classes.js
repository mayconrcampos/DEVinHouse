class Endereco {
    logradouro
    numero
    cidade
    uf
    pais
    cep

    constructor(logradouro, numero, cidade, uf, pais, cep){
        this.logradouro = logradouro
        this.numero = numero
        this.cidade = cidade
        this.uf = uf
        this.pais = pais
        this.cep = cep
    }

    imprimeEndereco(){
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        console.log(`Logradouro: ${this.logradouro}`)
        console.log(`Número: ${this.numero}`)
        console.log(`Cidade: ${this.cidade}`)
        console.log(`UF: ${this.uf}`)
        console.log(`País: ${this.pais}`)
        console.log(`CEP: ${this.cep}`)
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    }
}

var endereco = new Endereco(
    "Av Renato Ramos da Silva",
    "3033",
    "Imbituba",
    "SC",
    "Brasil",
    "88780-000"
)

endereco.imprimeEndereco()

