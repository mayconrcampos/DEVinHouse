class Monstro {
    constructor(vida, velocidade){
        this._vida = vida
        this._velocidade = velocidade
    }

    ataque(){
        console.log(`Monstro atacando.`)
    }

}

const monstro1 = new Monstro(30, 5)
monstro1.ataque()
console.log(monstro1)


