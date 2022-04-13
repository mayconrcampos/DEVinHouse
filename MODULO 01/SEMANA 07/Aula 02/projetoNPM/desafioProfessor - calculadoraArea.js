const readLine = require("readline-sync")


function circulo(raio){
    if(raio > 0){
        var area = Math.PI*(raio*raio)
        console.log(`Área do círculo: ${area}`)
    }else{
        console.log("ERRO! É preciso que o raio seja acima de 0.")
    }
    
}

function quadrado(lado, lado){
    if(lado == lado){
        var area = lado * lado
        console.log(`Área do Quadrado: ${area}`) 
    }
    
}

function retangulo(base, altura){
    if(base != altura && base > 0 && altura > 0){
        let area = base * altura 
        console.log(`Área do Retângulo: ${area}`)
    }else{
        console.log("ERRO! Retangulos possuem lados diferentes.")
    }
}

function triangulo(base, altura){
    if(base > 0 && altura > 0){
        var area = (base * altura) / 2
        console.log(`Área do Triângulo: ${area}`)
    }else{
        console.log("ERRO! Os valores precisam ser maiores que zero.")
    }
    
}




do {

    console.log("1. Circulo")
    console.log("2. Quadrado")
    console.log("3. Retangulo")
    console.log("4. Triângulo")
    console.log("5. Sair")
    var opcao = readLine.questionInt("s :")

    switch (opcao) {
        case 1:
            var raio = readLine.questionFloat("Digite o Raio: ")
            circulo(raio)
            break;
        
        case 2:
            var lado = readLine.questionFloat("Digite o lado: ")
            quadrado(lado, lado)
            break
        
        case 3:
            var lado1 = readLine.questionFloat("Digite o lado 1: ")
            var lado2 = readLine.questionFloat("Digite o lado 2: ")
            retangulo(lado1, lado2)
            break
        case 4:
            var base = readLine.questionFloat("Digite a base: ")
            var altura = readLine.questionFloat("Digite a altura: ")
            triangulo(base, altura)
            break
        
        case 5:
            console.log("Você saiu")
            break
    
        default:
            console.log("Opção inválida")
            break;
    }



} while (opcao != 5);