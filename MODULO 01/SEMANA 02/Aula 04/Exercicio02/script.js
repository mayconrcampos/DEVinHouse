function validar(){
    var usuario = document.getElementById("usuario")
    var senha = document.getElementById("senha")

    if(usuario.value == "aluno" && senha.value == "1234"){
        alert("Login foi realizado com sucesso")
    }else{
        alert("Preencha os campos corretamente")
    }
}