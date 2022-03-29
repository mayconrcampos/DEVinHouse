export default class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo 
        this.ano = ano 
    }

    imprimeCarro(){
        console.log(`Marca: ${this.marca} - Modelo: ${this.modelo} - ${this.ano}`)
    }
}