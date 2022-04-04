var json = JSON.stringify({"nome": "Maycon"})

console.log(json)
console.log(typeof json)

var objeto = JSON.parse(json)

console.log(objeto)
console.log(typeof objeto)

// localStorage
/*
localStorage.setItem('chave', "stringue")

var item = localStorage.getItem("chave")

console.log(item)

localStorage.removeItem("chave")
localStorage.clear()

*/