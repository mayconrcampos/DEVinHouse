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

console.log(func)