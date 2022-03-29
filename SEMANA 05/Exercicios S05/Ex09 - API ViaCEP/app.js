const btn = document.getElementById("btn")
const cep = document.getElementById("cep")
const msg = document.getElementById("mensagem")


btn.addEventListener("click", () => {
    msg.innerHTML = ""
    consultaCEP(cep)

    
})


async function consultaCEP(cep){
    if(cep.value.length == 8){
        const res = await fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        .then(response => {
            if(response.ok){
                console.log(response)
                return response.json()
            }
            throw new Error(`HTTP error: ${response.status}`)
        })
        .then(json => {
            if(json.erro){
                msg.innerHTML = "ERRO! CEP Não Encontrado."
            }else{
                console.log(json)
                msg.innerHTML += `Logradouro: ${json.logradouro}<br><br>`
                msg.innerHTML += `Complemento: ${json.complemento}<br><br>`
                msg.innerHTML += `Bairro: ${json.bairro}<br><br>`
                msg.innerHTML += `Cidade: ${json.localidade}<br><br>`
                msg.innerHTML += `UF: ${json.uf}<br><br>`
                msg.innerHTML += `CEP: ${json.cep}`
            }
        })
        .catch(erro => {
            console.error(erro)
        })

    }else{
        msg.innerHTML = `ERRO! CEP inválido.`
    }
}