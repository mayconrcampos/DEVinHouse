async function buscaCEPcatch(cep){
    try {
        

        if(!cep){
            console.log("Informe um cep")
            return
        }

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        const conteudo = await resposta.json()

        console.log(conteudo)
    
    }catch(erro){
        console.log(erro)
        console.log("Dentro do catch")
    }finally{
        console.log("Finalmente")
    }

     
}

buscaCEPcatch("88080400")
buscaCEPcatch("88010200")