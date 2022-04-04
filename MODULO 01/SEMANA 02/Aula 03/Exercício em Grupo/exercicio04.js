function indice(altura, peso){
    var imc = peso / (altura * altura)

    if(imc <= 18.5){
        console.log("Magro")
    }else if(imc > 18.5 && imc <= 24.9){
        console.log("Normal")
    }else if(imc > 24.9 && imc <= 30){
        console.log("Sobrepeso")
    }else{
        console.log("Obesidade")
    }
}

indice(1.70, 95)
indice(1.90, 80)