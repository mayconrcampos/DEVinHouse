function Calcular(altura, peso){
    var altura = document.getElementById("Altura").value;
    var peso =  document.getElementById("Peso").value;
    var imcTexto = document.getElementById("imcTexto").value;
    var imc = parseFloat(peso) / (parsefloat(altura) ** 2);
    console.log(imc)
    if (imc <= 18.5){
        imcTexto.innerText = "Baixo";
    }
    else if(imc > 18.5 && imc <= 24.9){
        imcTexto.innerText = "Saudável"
    }
    else if(imc > 24.9 && imc <= 30){
        imcTexto.innerText = "Sobrepeso"
    }
    else{
        imcTexto.innerText = "Obesidade"
    }
}