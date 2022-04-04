class Quadrado{
    constructor(lado){
        this.lado = lado
    }

    exibir(){
        console.log(`${this.lado}`)
    }

}

const quadrado = new Quadrado(4)

quadrado.exibir()