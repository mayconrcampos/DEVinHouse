var vetor = [1,2,3,4,5,6,7,8,9,10]

// se todos os itens forem iguais a 3
const result = vetor.every(item => {
    return item === 3
})

console.log(result)


// true se algum dos itens for impar
const impar = vetor.some(item => item % 2 != 0)

console.log(impar)