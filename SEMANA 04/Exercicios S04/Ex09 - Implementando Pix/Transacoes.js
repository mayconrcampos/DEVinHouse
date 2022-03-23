const conta = Symbol()
const valorTransacao = Symbol()

class Transacoes{
    constructor(valor){
        this[conta] = valor
        this[valorTransacao]
    }

    get saldoConta(){
        return this[conta]
    }

    set saldoConta(valor){
        this[conta] = valor
    }

    get valorTransacao(){
        return this[valorTransacao]
    }

    set valorTransacao(valor){
        this[valorTransacao] = valor
    }

    transferencia(valor){
        if(valor <= this.saldoConta){
            this.valorTransacao = valor

            this.saldoConta -= this.valorTransacao

            console.log(`Pix de R$${this.valorTransacao} realizado com sucesso.`)
            console.log(`Saldo Conta: R$ ${this.saldoConta}`)
        }else{
            console.log(`Saldo insuficiente`)
        }
    }

    deposito(valor){
        this.valorTransacao = valor

        this.saldoConta += this.valorTransacao

        console.log(`Depósito de R$ ${this.valorTransacao} efetuado com sucesso`)
        console.log(`Saldo Conta: R$ ${this.saldoConta}`)

    }

    mostrarSaldo(){
        console.log(`Saldo Conta: R$ ${this.saldoConta}`)
    }
}

var conta1 = new Transacoes(1000)
conta1.mostrarSaldo()
conta1.transferencia(1500)
conta1.transferencia(800)
conta1.deposito(2000)
conta1.transferencia(50)
conta1.transferencia(2000)

console.log(conta1.conta)
conta1.conta = 1234
console.log(conta1.conta)

conta1.mostrarSaldo()





