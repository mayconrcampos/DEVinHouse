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
console.log(vetor)

// Cria novo array apenas com itens que passaram no teste pela função fornecida.
// Se fizer isso com map, ele simplesmente retorna um array com o resultado... true ou false... mas não retorna o valor que passou no teste.

const maiorQueCinco = vetor.filter(n => n > 5)
console.log(maiorQueCinco)

const igualA5 = vetor.filter(n => n == 5)
console.log("Ao quadrado?"+igualA5)


const vetObj = [
    {nome: "Batata", preco:2},
    {nome: "Pera", preco:5},
    {nome: "Uva", preco:9}
]

const novoVetObj = vetObj.map(n => n.preco < 5)

console.log(novoVetObj)
// [ true, false, false ]

const novoVetObj2 = vetObj.filter(n => n.preco > 5)
console.log(novoVetObj2)

// Find .... procurando dentro do array
// Retorna o primeiro elemento que satisfizer a condição.
const procuraBatata = vetObj.find(n => n.nome == "Batata")
console.log(procuraBatata)

// every - retorna true ou false .. Testa todos os itens
// Retorna true se todos os itens passarem no teste
const todo = vetObj.every(p => p.preco > 1)
console.log(todo)
// true
// Todos os itens custam mais que 1.

// Some - retorna true se algum dos elementos passarem no teste
const algum = vetObj.some(n => n.preco > 5)
console.log(algum)
// true
// Pois teve a Uva que custa mais que 5


// includes - Teste se item está no vetor

console.log(vetor.includes(5))
// true pois o vetor possui 5

console.log(vetor.includes(66))
// false, pois não existe 66 no vetor.