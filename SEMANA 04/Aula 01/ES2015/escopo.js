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