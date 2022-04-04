class Cliente {
    nome
    cpf
    endereco
    numeroCelular

    constructor(nome, cpf, endereco, numeroCelular){
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.numeroCelular = numeroCelular
    }

    imprimeDadosCliente(){
        console.log("-=-=-=-=-=-=-= Dados do Cliente -=-=-=-=-=-=-=-=")
        console.log(`Nome: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Endereço: ${this.endereco}`)
        console.log(`Nº Celular: ${this.numeroCelular}`)
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    }
}


var cliente1 = new Cliente(
    "Maycon R Campos",
    "012.345.678-90",
    "Av Renato Ramos da Silva, 3033 - Vila Nova - Imbituba - SC",
    "(048)98765-4321"
)

cliente1.imprimeDadosCliente()