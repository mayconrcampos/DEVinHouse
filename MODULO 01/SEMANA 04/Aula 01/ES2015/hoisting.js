// É quando o javascript ergue uma variável ao topo do script a fim de evitar uma exceção

console.log(a)

var a  = 6

// Apesar de ter sido declarada após o console.log, ela aparece como undefined, pois a atribuição somente veio após o console log.

// Mas isso somente acontece com var e function...
// Isto não ocorre com const e let.

//console.log(b)
//const b = 10


console.log(aa)
let aa = 111