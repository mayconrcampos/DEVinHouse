function f(x, y){
    return (x ** 2) + y
}



function primo(x){
    
    var div = 0
    for(var i = 1; i <= x; i++){
        if(x % i == 0){
            div++
        }
    }
    if(div == 2){
        return `<li>${x} É primo!</li>`
    }else{
        return `<li>${x} Não é primo!</li>`
    }
}


function listar(){
    var lista = document.getElementById("lista")
    var numero = document.getElementById("numero")

    lista.innerHTML = ""

    numero = parseInt(numero.value)
    console.log(numero)
    for(var i = 1; i < numero; i++){
        lista.innerHTML += primo(i)
    }
}
