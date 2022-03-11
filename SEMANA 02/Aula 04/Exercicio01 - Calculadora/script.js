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
          
            var res = eval(`${primeiro.value} ${multiplica.value} ${segundo.value}`)
            resultado.innerText = `${primeiro.value} x ${segundo.value} = ${res}`
            primeiro.value = ''
            segundo.value = ''

        }else if(divide.checked == true){
            var res = eval(`${primeiro.value} ${divide.value} ${segundo.value}`)
            resultado.innerText = `${primeiro.value} / ${segundo.value} = ${res}`
            primeiro.value = ''
            segundo.value = ''

        }else if(soma.checked == true){
            var res = eval(`${primeiro.value} ${soma.value} ${segundo.value}`)
            resultado.innerText = `${primeiro.value} + ${segundo.value} = ${res}`
            primeiro.value = ''
            segundo.value = ''

        }else{
            var res = eval(`${primeiro.value} ${subtrai.value} ${segundo.value}`)
        
            resultado.innerText = `${primeiro.value} - ${segundo.value} = ${res}`
            primeiro.value = ''
            segundo.value = ''
        }
        
    
}