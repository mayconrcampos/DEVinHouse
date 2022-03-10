function olar(){
    var ola = document.getElementById("ola")

    if(ola.innerText == "Clique aqui!"){
        var nome = window.prompt("Digite seu nome: ")

        ola.innerText = `Olá Amiguinho! Seu nome é ${nome}`
    }else{
        ola.innerText = "Clique aqui!"
    }
}