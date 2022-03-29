export class Pessoa{
    constructor(nome, idade){
        this.nome = nome 
        this.idade = idade
    }

    imprimePessoa(){
        console.log(
            `Nome: ${this.nome} - Idade: ${this.idade}`
        )
    }
}

// Export default faz com que o item padrão de exportação é este.
// Quando exportar com default, podemos importar no outro arquivo sem uso das chaves e podemos também nomear o arquivo do jeito que quiser.