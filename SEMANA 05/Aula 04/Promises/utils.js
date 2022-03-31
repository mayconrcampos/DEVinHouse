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
})
.catch(erro => {
    console.log(erro)
})
.finally(() => {
    console.log("Finaleira executada.")
}))

function buscaCEP(cep){
    return fetch(`https://viacep.com.br/ws/${cep}/json`).then(response => {
        return response.json()
    })
}

var cep1 = buscaCEP("88010200")
var cep2 = buscaCEP("88080400")

console.log(cep1)
console.log(cep2)






