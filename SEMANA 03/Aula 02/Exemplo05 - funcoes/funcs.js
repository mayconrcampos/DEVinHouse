function f(x, y){
    return (x ** 2) + y
}

var executa = f
console.log(executa(2, 3))


function primo(x){
    var div = 0
    for(var i = 1; i <= x; i++){
        if(x % i == 0){
            div++
        }
    }
    if(div == 2){
        console.log(x+" É primo!")
    }else{
        console.log(x+ "Não é primo!")
    }
}

for(var i = 1; i < 100; i++){
    primo(i)
}