/**
 * São funções builtins do javascript utilizadas para manipulação de arrays.
 */

/**
 * métodos prototypes são os métodos de instancia dos arrays
 * 
 * concat()
 * copyWithin()
 * entries()
 * every()
 * fill()
 * 
 * 
 * Array possui também métodos estáticos.
 * 
 * Array.isArray([])
 * true
 * 
 * Array.isArray("1")
 * false
 */

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Foreach itera sobre o array, e em cada iteração ele executa uma função passada como callback...

// Foreach não retorna nada.... 
vetor.forEach((num) => {
    console.log(num)
})

// Podemos fazer a mesma coisa, mas retornando valores de cada operação.
// O map pega todos os returns de todas as iterações, e faz um novo array.
const vetorEmDobro = vetor.map((n) => {return n * 2})
console.log(vetorEmDobro)