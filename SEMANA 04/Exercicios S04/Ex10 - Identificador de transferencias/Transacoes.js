class Transacoes{
    conta
    valorTransacao 
    idDeTransferencia = 0
    numeroDaConta
    data

    constructor(valor){
        this.setSaldoConta(valor)
    }

    getIdDeTransferencia(){
        return this.idDeTransferencia
    }

    setIdDeTransferencia(){
        this.idDeTransferencia++
    }

    getNumeroDaConta(){
        return this.numeroDaConta
    }

    setNumeroDaConta(numero){
        this.numeroDaConta = numero
    }

    getData(){
        return this.data
    }

    setData(){
        var data = new Date()
        var dia = data.getDate()
        var mes = data.getMonth() + 1
        mes = mes < 10 ? "0"+mes : mes
        var ano = data.getFullYear()
        var hora = data.getHours()
        var minuto = data.getMinutes()
        var segundos = data.getSeconds()

        this.data = `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundos}`
    }

    getSaldoConta(){
        return this.conta.toFixed(2)
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

    transferencia(valor, numeroContaDestino){
        if(valor <= this.getSaldoConta()){
            this.setValorTransacao(valor)
            this.setNumeroDaConta(numeroContaDestino)
            this.setData()

            this.conta -= this.getValorTransacao()
            this.setIdDeTransferencia()

            console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
            console.log(`Pix de R$${this.getValorTransacao()} realizado com sucesso.`)
            console.log(`Saldo Conta: R$ ${this.getSaldoConta()}`)
            console.log(`ID da Transação: ${this.getIdDeTransferencia()} - Nº Conta Destino: ${this.getNumeroDaConta()}`)
            console.log(`Data e Hora da Transação: ${this.getData()}`)
            console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        }else{
            console.log(`ERRO ao transferir. Saldo insuficiente.`)
        }
    }

    deposito(valor){
        this.setValorTransacao(valor)

        this.conta += this.getValorTransacao()

        console.log(`Depósito de R$ ${this.getValorTransacao().toFixed(2)} efetuado com sucesso`)
        console.log(`Saldo Conta: R$ ${this.getSaldoConta()}`)

    }

    mostrarSaldo(){
        console.log(`Saldo Conta: R$ ${this.getSaldoConta()}`)
    }
}

var conta = new Transacoes(1000)
conta.mostrarSaldo()
conta.transferencia(100, "1245-6")
conta.transferencia(800, "3453-3")
conta.deposito(2000)
conta.transferencia(50, "1234-2")
conta.deposito(2500)
conta.transferencia(1259, "1385-1")



