var obj = {}

var btn = document.getElementById("btn")
var cep = document.getElementById("cep")
var lista = document.getElementById("lista")
btn.addEventListener("click", () => {
    if(cep.value.length == 8){
        buscaCEP(cep.value)
    }
}) 



function buscaCEP(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(resposta => {
        resposta.json()
        .then(conteudo => {
            lista.innerHTML = ""
            console.log(conteudo)
            lista.innerHTML += `Logradouro: ${conteudo.logradouro}<br>`
            lista.innerHTML += `Complemento: ${conteudo.complemento}<br>`
            lista.innerHTML += `Bairro: ${conteudo.bairro}<br>`
            lista.innerHTML += `Cidade: ${conteudo.localidade}<br>`
            lista.innerHTML += `UF: ${conteudo.uf}<br>`
            lista.innerHTML += `CEP: ${conteudo.cep}`
            
        })
    })
}




