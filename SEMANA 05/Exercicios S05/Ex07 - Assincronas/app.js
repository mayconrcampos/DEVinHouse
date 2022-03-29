async function euNaoEspero(){
    console.log("Eu não espero.")
    aguarda3Segundos()
}

async function euEspero(){
    await aguarda3Segundos()
    console.log("Esperei 3 segundos.")
}

async function aguarda3Segundos(){
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("Terminei")

}

euNaoEspero()
euEspero()