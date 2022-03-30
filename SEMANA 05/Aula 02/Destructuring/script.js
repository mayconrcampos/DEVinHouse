/**
 * Destructuring
 */

// Exemplo com vetor

var vetor = [1, 2, 3, 4]
var [um, dois, tres, quatro] = vetor 

console.log(um + dois + tres + quatro)

var obj = {nome: "Maycon", idade: 39}
var {nome, idade} = obj

nome = "Maycon R Campos"

console.log(nome, idade)