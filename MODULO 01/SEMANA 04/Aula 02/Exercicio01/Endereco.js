/**
 * Crie uma classe Endereço com os atributos.
 * 
 * logradouro
 * numero
 * cidade
 * uf
 * pais
 * cep
 * 
 * É para retornar o Logradouro + o número.
 * 
 */

class Endereco {
    constructor(logradouro, numero, cidade, uf, pais, cep){
        this.logradouro = logradouro
        this.numero = numero
        this.cidade = cidade
        this.uf = uf
        this.pais = pais
        this.cep = cep
    }

    imprimir(){
        return `Logradouro: ${this.logradouro}\nNumero: ${this.numero}`
    }
}

var meuEndereco = new Endereco(
    "Av Renato Ramos da Silva",
    "3013",
    "Imbituba",
    "SC",
    "Brasil",
    "88780-000"
)

console.log(meuEndereco.imprimir())

var otoEndereco = new Endereco(
    "Rua Paula Ramos",
    "316",
    "Florianópolis",
    "SC",
    "Brasil",
    "88080-400"
)

console.log(otoEndereco.imprimir())