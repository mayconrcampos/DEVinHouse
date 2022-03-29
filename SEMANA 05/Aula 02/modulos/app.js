import { soma } from "./funcs.js";
import { Pessoa } from "./Pessoa.js";

var res = document.getElementById("res")

const result = soma(10, 8)
res.innerHTML = result

console.log(result)


var p = new Pessoa("Maycon", 39)
p.imprimePessoa()
