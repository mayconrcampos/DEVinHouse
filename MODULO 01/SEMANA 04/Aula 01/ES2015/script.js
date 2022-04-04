/**
 * ES6 Modules: import export
 * 
 * for of loops
 * Generators
 * Arrow Functions
 * let, const
 * Promises
 * Parâmetros padrão
 * Operadores ** e **= 
 * String e Array .includes()
 * Object .entries() e .values()
 * async await
 * Destruct
 * Spread
 * Módulos import e export
 */


var carro = {
    ano: 1995,
    modelo: "uno"
}

for (const key in carro) {
   console.log(carro[key])
}