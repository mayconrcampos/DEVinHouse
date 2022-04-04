class Conta {
    numeroConta
    saldo 
    cliente

    constructor(numeroConta, saldo, cliente){
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.cliente = cliente
        
    }

    imprimeDadosConta(){
        console.log("-=-=-=-=-=-=-= Dados da Conta -=-=-=-=-=-=-=-=")
        console.log(`Nº Conta: ${this.numeroConta}`)
        console.log(`Saldo R$: ${this.saldo}`)
        console.log(`Cliente: ${this.cliente}`)
       
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    }
}


var conta1 = new Conta(
    "1933-2",
    2500,
    "Maycon R. Campos"
)

conta1.imprimeDadosConta()