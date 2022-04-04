var carro = {
    ano: 2000,
    modelo: "Uno",
    marca: "Fiat"
}

console.log(carro)
console.log(typeof carro)

var carroJSON = JSON.stringify(carro)

console.log(typeof carroJSON)

// Através desse texto, podemos enviar para o servidor como JSON, ou armazenas na localStorage
// Não podemos fazer isso sem utilizar stringfy.

localStorage.setItem("carro", carroJSON)

var carroLocalStorage = localStorage.getItem("carro")

console.log(carroLocalStorage)

carroJSON = JSON.parse(carroLocalStorage)

console.log(carroJSON)