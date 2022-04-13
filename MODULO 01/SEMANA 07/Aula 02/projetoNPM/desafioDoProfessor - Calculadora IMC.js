const readLine = require("readline-sync")



do{

    var opcao = ""
    let peso = readLine.questionFloat("Insira seu peso: ")
    let altura = readLine.questionFloat("Insira sua altura: ")

    if(typeof peso == "number" && typeof altura == "number"){
        console.log(`Peso: ${peso}, Altura: ${altura}`)

        var IMC = Math.round(peso/(altura*altura))

        if(IMC < 18.5){
            console.log(`IMC = ${IMC.toFixed(2)} - Baixo peso`)
        }else if(IMC >= 18.5 && IMC <= 24.9){
            console.log(`IMC = ${IMC.toFixed(2)} - Peso normal`)
        }else if(IMC >= 25 && IMC <= 29.9){
            console.log(`IMC = ${IMC.toFixed(2)} - Excesso de peso`)
        }else if(IMC >= 30 && IMC <= 34.9){
            console.log(`IMC = ${IMC.toFixed(2)} - Obesidade classe 1`)
        }else if(IMC >= 35 && IMC <= 39.9){
            console.log(`IMC = ${IMC.toFixed(2)} - Obesidade classe 2`)
        }else{
            console.log(`IMC = ${IMC.toFixed(2)} - Obesidade classe 3`)
        }

        opcao = readLine.question("Deseja continuar? S ou N: ")

        if(opcao == "S"){
            continue
        }else if(opcao == "N"){
            break
        }else{
            console.log("Opção inválida.")
        }

    
    }else{
        console.log("Valor inválido.");

    }

}while(opcao == "S")

    


