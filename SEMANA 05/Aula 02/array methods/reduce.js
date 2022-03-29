/**
 * Possui um acumulador nele mesmo
 */

 var vetor = [1,2,3,4,5,6,7,8,9,10]


 const result = vetor.reduce((acum, item) => {
     console.log(acum, item)
     return acum + item
 }, 0)

 console.log(result)


 // Podemos usar também com objetos

 const produtos = [
     {nome: "batata", qtd: 3, preco: 4},
     {nome: "arroz", qtd: 2, preco: 6},
     {nome: "açucar", qtd: 5, preco: 8},
     {nome: "feijao", qtd: 10, preco: 4.5},
 ]

// 
 const total = produtos.reduce((acum, item) => {
     return acum + (item.qtd * item.preco)
 }, 0)

 console.log(total)