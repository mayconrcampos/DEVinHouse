class ContaBanco {
    constructor(nome, agencia, numero, saldo, limite){
        this.nomeBanco = nome
        this.agencia = agencia
        this.numeroConta = numero
        this.saldo = saldo
        this.limite = -limite
    }

    setNomeBanco(nome){
        this.nomeBanco = nome
    }

    getNomeBanco(){
        return this.nomeBanco
    }

    setAgencia(ag){
        this.agencia = ag
    }

    getAgencia(){
        return this.agencia
    }

    setNumeroConta(numConta){
        this.numeroConta = numConta
    }

    getNumConta(){
        return this.numeroConta
    }

    setSaldo(saldo){
        this.saldo = saldo
    }

    getSaldo(){
        return this.saldo
    }

    setLimite(limite){
        this.limite = limite
    }

    getLimite(){
        return this.limite
    }

    // Métodos da conta bancária

    depositar(valor){
        this.saldo += valor
        console.log(`Você efetuou depósito de R$${valor} no banco ${this.nomeBanco}`)
        this.imprimirSaldo()
    }

    sacar(valor){
        let saldo = this.saldo - valor
        if(saldo >= this.limite){
            this.saldo -= valor
            console.log(`Você efetuou saque de R$${valor} do banco ${this.nomeBanco}`)
            this.imprimirSaldo()
        }else{
            console.log(`Tentativa de saque do banco ${this.nomeBanco}. Limite excedido.`)
        }
        
    }

    imprimirSaldo(){
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        console.log(`Banco: ${this.getNomeBanco()}`)
        console.log(`AGência: ${this.getAgencia()}`)
        console.log(`Conta: ${this.getNumConta()}`)
        console.log(`Saldo: R$: ${this.getSaldo()}`)
        console.log(`Limite: R$: ${this.getLimite()}`)
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
    }
}

var conta1 = new ContaBanco("Bradesco", "1399-9", "1384", 1000, 500)

conta1.sacar(999)
conta1.sacar(500)

conta1.depositar(5000)

var conta2 = new ContaBanco("Itaú", "1582", "199-6", 5000, 1000)

conta2.sacar(10000)
conta2.depositar(5000)

