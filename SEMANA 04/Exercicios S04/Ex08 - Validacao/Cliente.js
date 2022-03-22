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

    validaCPF(cpf){
        if(cpf.length > 14){
            
        }
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