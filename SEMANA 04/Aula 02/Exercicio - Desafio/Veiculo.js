class Veiculo {
    constructor(tipoVeiculo, marca, modelo, ano, placa, numMultas, velocidadeMAX){
        this.tipoVeiculo = tipoVeiculo
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.placa = placa
        this.numMultas = numMultas
        this.velocidadeMAX = velocidadeMAX
    }

    getTipoModelo(){
        console.log(`Tipo: ${this.tipoVeiculo} Modelo: ${this.modelo}`)
    }

    adicionaMulta(placa){
        if(placa == this.placa){
            this.numMultas++
            console.log(`Nº de Multas: ${this.numMultas}`)
        }else{
            console.log(`Placa inválida.`)
        }
    }
}

var carro1 = new Veiculo(
    "Carro",
    "Ford",
    "Escort",
    1997,
    "MBX9988",
    0,
    140
)

carro1.adicionaMulta("MBX2222")
carro1.adicionaMulta("MBX9988")
carro1.getTipoModelo()