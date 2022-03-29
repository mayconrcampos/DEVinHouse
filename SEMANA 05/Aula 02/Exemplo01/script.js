/**
 * Revisão sobre arrow functions
 */

// função comum

function ola(){
    console.log("Olá!")
}

ola()

// arrow function
var olar = () => console.log("Olár!")
olar()

// Toda arrow function é anônima.
// Podemos usar em callbacks
// Podemos atribui-la a variáveis também.

console.log(this)

var pe = document.getElementById("pe")

pe.addEventListener("click", () => {
    console.log(this, this.asdas?.props)
})
