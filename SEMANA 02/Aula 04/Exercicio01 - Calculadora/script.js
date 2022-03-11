function Calcula(){
    var primeiro = document.getElementById("primeiro")
    var segundo = document.getElementById("segundo")
    var multiplica = document.getElementById("multiplica")
    var divide = document.getElementById("divide")
    var soma = document.getElementById("soma")
    var subtrai = document.getElementById("subtrai")
    var operador = document.getElementsByName("operador")
    var resultado = document.getElementById("resultado")

    console.log(multiplica.checked)
    


        if(multiplica.checked == true ){
            console.log("aqui")
            var res = eval(`${primeiro.value} ${multiplica.value} ${segundo.value}`)
            resultado.innerText = `${primeiro.value} x ${segundo.value} = ${res}`

        }else if(divide.checked == true){
            var res = eval(`${primeiro.value} ${divide.value} ${segundo.value}`)
            resultado.innerText = `${primeiro.value} / ${segundo.value} = ${res}`

        }else if(soma.checked == true){
            var res = eval(`${primeiro.value} ${soma.value} ${segundo.value}`)
            resultado.innerText = `${primeiro.value} + ${segundo.value} = ${res}`
        }else{
            var res = eval(`${primeiro.value} ${subtrai.value} ${segundo.value}`)
        
            resultado.innerText = `${primeiro.value} - ${segundo.value} = ${res}`
        }
        
    
}