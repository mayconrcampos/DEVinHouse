function mensagem(){
    var nome = document.getElementById("nome").value 
    var email = document.getElementById("email").value 

    var modal = document.getElementById("modal")
    var modalNome = document.getElementById("modalNome")
    var modalEmail = document.getElementById("modalEmail")

    var formulario = document.getElementById("form")
    var sobre = document.getElementById("sobre")


    if(nome.length > 0 && email.length > 0){
        modalNome.innerText = `Nome: ${nome}`
        modalEmail.innerText = `Email: ${email}`
        modal.style.display = "block"
        formulario.style.display = "none"
        sobre.style.display = "none"
       

    }else{
        
        alert("ERRO! Digite seu nome e email.")
    }
}


function fechar(){
    var modal = document.getElementById("modal")
    var formulario = document.getElementById("form")
    var sobre = document.getElementById("sobre")

    var nome = document.getElementById("nome")
    var email = document.getElementById("email")

    modal.style.display = "none"
    formulario.style.display = "block"
    sobre.style.display = "block"

    nome.value = ""
    email.value = ""

}