/**
 * Escopo é o que responde a pergunta:
 * 
 * "Onde essas variáveis estão disponíveis?"
 * 
 * Trata-se da visibilidade das variáveis dentro do script. Seja ela dentro do escopo local ou global.
 * 
 * Escopo global: Disponível para toda a aplicação
 * Escopo de função: Dentro apenas da função que ela foi declarada.
 * Escopo de bloco: Quando se encontra dentro de blocos de comando... "laços, if, else..."
 */


// escopo global
var global = "estou no escopo global"


// escopo de função
function funcao(){
    var func = "estou no escopo de função"
}


// escopo de bloco
if(funcao){
    var bloco = "estou no escopo de bloco"
}else{

}

console.log({
    global, bloco
})


var largura = 100

function funcLargura(){
    console.log(largura)

    var largura = 50

    console.log(largura)
}


console.log(largura)
funcLargura()

// outro exemplo
console.log("-=-=-=-=-=-=-=-=-=-=")
var altura = 100
if(altura > 90){
    let altura = 50
    console.log("altura dentro "+altura)
    const largura = 100
    console.log(largura)
}

console.log("altura fora: "+altura)
console.log(largura)

// outro exemplo

console.log("-=-=-=-=-=-=-=-=-=-=-=--")
let numero = 10
let num = 20

if(num > 10){
    let numero = 11
    console.log(numero)
}

console.log(numero)


// outro exemplo em escopo de função

let testeFora = 10

function exemplo(){
    const teste = 5

    testeFora = 11

    return teste
}

console.log(exemplo(), testeFora)


// outro exemplo
console.log("-=-=-=-=-=-=-=-=-=-============")
var a 
a = 5

let b 
b = a + 5

console.log(a, b)

console.log("Const com arrays =-=-=-=-=-=-=-=")

const meuArray = []

meuArray.push("Maycon")
meuArray.push("Ariana")

console.log(meuArray)

// outro exemplo

const aaaa = 10

console.log(a)


//aaaa = 11

//console.log(aaaa) // erro


// 


