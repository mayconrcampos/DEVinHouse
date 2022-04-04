/**
 * Destructuring
 */

// Exemplo com vetor

var vetor = [1, 2, 3, 4]
var [um, dois, tres, quatro] = vetor 

console.log(um + dois + tres + quatro)


// Exemplo usando objeto
var obj = {nome: "Maycon", idade: 39}
var {nome, idade} = obj

nome = "Maycon R Campos"

console.log(nome, idade)

// outro exemplo
function apresenTAR({nome = "Qualquer Nome", idade = 0}){
    console.log(`Nome: ${nome} - Idade: ${idade}`)
}

apresenTAR(obj)
apresenTAR({})


// Outro exemplo

var complex = {
    nome1: "Maycon",
    itens: ["chave", "carteira", "celular"]
}

const {nome1, itens} = complex
const [chave, carteira, celular] = itens

console.log(nome1, chave, carteira, celular)