var vetor = [9,8,7,6,5,4,3,2,1,0]


// Map executa a função passada em cada item do array
const result = vetor.map(numero => numero * 4)

console.log(result)

const printaVetor = vetor.map((valor, indice, array) => {
    console.log(valor, indice, array)
})