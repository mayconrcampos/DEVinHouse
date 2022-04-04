import Pessoa from "./Pessoa.js"


var pessoa = new Pessoa("Maycon", "01234567899")

let imprime = document.getElementById("pe")

imprime.innerHTML = `${pessoa.imprime()}`
console.log(pessoa.imprime())


