class Cachorro {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }

    latir(){
        console.log(`${this.nome} está latindo.`)
    }

    pegarBolinha(){
        console.log(`${this.nome} correu pra pegar a bolinha.`)
    }

}


var rex = new Cachorro(
    "Rex",
    "Doberman"
)

rex.latir()
rex.pegarBolinha()

var salsicha = new Cachorro("Pipa", "Salsichinha")
salsicha.latir()
salsicha.pegarBolinha()