/**
 * Operadores | Rest e Spread
 * 
 * Ambos operadores são representados por ...
 * 
 * Três pontos = ...
 */

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