const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arrayQuadrados = []

arrayNumeros.map((num) => {
    arrayQuadrados.push(num**2)
})

console.log(`Array de quadrados: ${arrayQuadrados}`)

arrayQuadrados.filter((num) => {
    if(num > 30){
        console.log(`${num} é maior que 30`)
    }else{
        console.log(`${num} é menor que 30`)
    }
})