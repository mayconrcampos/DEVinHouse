class Transacoes{
    conta
    valorTransacao 

    constructor(valor){
        this.setSaldoConta(valor)
    }

    getSaldoConta(){
        return this.conta
    }

    setSaldoConta(valor){
        this.conta = valor
    }

    getValorTransacao(){
        return this.valorTransacao
    }

    setValorTransacao(valor){
        this.valorTransacao = valor
    }

    transferencia(valor){
        if(valor <= this.getSaldoConta()){
            this.setValorTransacao(valor)

            this.conta -= this.getValorTransacao()

            console.log(`Pix de R$${this.getValorTransacao()} realizado com sucesso.`)
            console.log(`Saldo Conta: R$ ${this.getSaldoConta()}`)
        }else{
            console.log(`Saldo insuficiente`)
        }
    }

    deposito(valor){
        this.getValorTransacao(valor)

        this.conta += this.getValorTransacao()

        console.log(`Depósito de R$ ${this.getValorTransacao()} efetuado com sucesso`)
        console.log(`Saldo Conta: R$ ${this.getSaldoConta()}`)

    }

    mostrarSaldo(){
        console.log(`Saldo Conta: R$ ${this.getSaldoConta()}`)
    }
}

var conta = new Transacoes(1000)
conta.mostrarSaldo()
conta.transferencia(1500)
conta.transferencia(800)
conta.deposito(2000)
conta.transferencia(50)

