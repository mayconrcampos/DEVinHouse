// Vetores - array
// Estruturas de repetição

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






// while

var i = 0

while(i < carros.length){
    console.log(carros[i])
    i++
}

// do while
var j = 0
do {
    console.log(j)
    j++
    
} while (j <= 10);

// For simples

for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
    
}

// For in
for (const key in carros) {
    console.log(`Forin: ${carros[key]} ${key}`)
}

// For of
for (const carro of carros) {
    var belina = carro == "Belina" ? "Tem belina" : "Não tem belina"
    console.log(`Forof: ${carro}, ${belina}`)
}

// For each
carros.forEach(element => {
    console.log(`foreach: ${element}`)
});