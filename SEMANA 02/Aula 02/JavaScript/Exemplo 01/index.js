var nome = window.prompt("Digite seu nome")
var idade = window.prompt("Digite sua idade: ")

var ola = document.getElementById("ola")
var mensagem = document.getElementById("mensagem")

if(nome.length > 0){
    ola.innerText = `Olá ${nome} tudo certo contigo?`

    if(idade < 18){
        mensagem.innerText = `Você é de menor!`
    }else if(idade >= 18 && idade <= 65){
        mensagem.innerText = "Você é de maior!"
    }else{
        mensagem.innerText = "Você está experiente!"
    }

}else{
    alert("Erro!")
}





