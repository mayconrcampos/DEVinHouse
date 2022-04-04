class Carro {
    constructor(modelo, velocidade){
        this.modelo = modelo
        this.velocidade = velocidade

    }

    acelerar(){
        console.log("Carro acelerando.")
    }

    frear(){
        console.log("Carro freando.")
    }

    acendeFarol(){
        console.log("Carro ligou farol.")
    }
}

var meuCarro = new Carro(
    "VW GOL",
    160
)

meuCarro.acendeFarol()
meuCarro.frear()
meuCarro.acelerar()
console.log(meuCarro.modelo)
console.log(meuCarro.velocidade)
