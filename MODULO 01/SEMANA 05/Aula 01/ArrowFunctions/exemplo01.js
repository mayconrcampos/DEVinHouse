/**
 * Veio juntamente com o ES2015
 */

function soma(a, b){
    console.log(a + b)
}

soma(2, 6)

// Declaração Arrow
const somaTudo = (a, b) => console.log(a + b)

somaTudo(12, 45)

// const saudar com Arrow

const saudar = () => console.log("Olá")

saudar()

// Arrows são utilizadas muito dentro de foreach

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]

vetor.forEach((num, index, vet) => {
    console.log(num, vet[index])
});

// Podemos omitir os parenteses caso a função tenha apenas um parâmetro

const numeroAoQuadrado = n => console.log(n**2)

numeroAoQuadrado(5)

// Podemos omitir o return

const cubo = n => n**3

console.log(cubo(9))

const res = cubo 
console.log(res(5))