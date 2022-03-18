
var conta = 0
var meutimeout = setInterval(() => {
    console.log("Olá"+conta)
    conta++
    if(conta == 10){
        clearTimeout(meutimeout)
    }
}, 1000)

