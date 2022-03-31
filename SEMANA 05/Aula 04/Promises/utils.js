export async function CincoSegundos(){
    await new Promise(resolve => {
        setTimeout(resolve, 5000)
    })
    console.log("Terminei")
}


export function ChamaASYNC(){
    console.log("Chamei a função")
    CincoSegundos()
}
var listaCEPS = {
    "88080400": {
        logradouro: "Rua Paula Ramos"
    }
}

function buscaCEPpromise(cep){
    return new Promise((resolve, reject) => {
        const resultado = listaCEPS[cep]
        const erro = resultado ? null : "CEP Inválido"
    
        if(erro){
            reject(erro)
        }else{
            resolve(resultado)
        }
    })

}


console.log(buscaCEPpromise("88080400")
.then((resolve) => { 
  console.log("Olha isso! "+resolve.logradouro)  
}
))
console.log(buscaCEPpromise("88010200"))