class Pessoa{
    ser(){
        console.log("Sou uma pessoa")
    }
}

class Jovem extends Pessoa {
    ser(){
        console.log("Sou uma pessoa jovem")
    }
}

class Idoso extends Pessoa {
    ser(){
        console.log("Sou uma pessoa Idosa")
    }
}

// 

const lista = [p, j, i]

lista.forEach(classe => {
    classe.ser()
});