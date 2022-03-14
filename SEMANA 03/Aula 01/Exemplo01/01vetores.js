// Vetores - array

var carros = []

carros.push("Belina")
carros.push("Corcel")
carros.push("Diplomata")
carros.push("Fusca")
carros.push("escort")
carros.push("Ecosport", "Caravan", "Mondeo")
console.log(carros)

// Objeto
var nomeIdade = {
    "nome": "Maycon",
    "idade": 39
}

console.log(nomeIdade.nome, nomeIdade.idade)
console.log(carros.length)

for (const carro of carros) {
    var belina = carro == "Belina" ? "Tem belina" : "Não tem belina"
    console.log(carro, belina)
}

for (const key in nomeIdade) {
    console.log(nomeIdade[key], key)
}