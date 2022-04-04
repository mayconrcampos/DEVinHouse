export async function aguarda3Segundos(){
    await new Promise(resolve => setTimeout(resolve, 5000))
    var p = document.createElement("p")
    p.innerHTML = "Terminei em 5 segundos"
    document.body.appendChild(p)
}

export async function euNaoEspero(){
    aguarda3Segundos()
}