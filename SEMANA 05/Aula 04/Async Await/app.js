var btn = document.getElementById("btn")
var cep = document.getElementById("cep")
var display = document.getElementById("display")


async function buscaCEPawait(){


    if(!cep.value){
        display.innerHTML = "Informe o CEP"
        return
    }
    const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    const conteudo = await resposta.json()

    console.log(conteudo)
    display.innerHTML = conteudo.localidade
}



btn.addEventListener("click", buscaCEPawait)

