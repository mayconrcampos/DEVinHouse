/**
 * Operadores | Rest e Spread
 * 
 * Ambos operadores são representados por ...
 * 
 * Três pontos = ...
 */


// Rest operator
function apresenta(nome, idade, ...outros){
    console.log(`Olá ${nome}! Você tem ${idade} anos.`)
    if(outros.length > 0){
        console.log(`Você também é ${outros}`)
    }
    
}

apresenta("Maycon", 39, "Programador", "Casado", "1.70m de altura", "Curto Rock and Roll")


// outro exemplo
function somaTudo(...nums){
    return nums.reduce((acc, num) => acc + num, 0)
}


console.log(somaTudo(1,2,3,4,5,6,7,8,9))

// Spread operator

var num1 = [1,2,3,4,5]
var num2 = [6,7,8,9,10]
var num3 = [...num1, ...num2]
console.log(num3)


// outro exemplo
var maycon = ["Maycon", 39, "Programador"]

function apresenta(nome, idade, prof){
    console.log(nome, idade, prof)
}

apresenta(...maycon)