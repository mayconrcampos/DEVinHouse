class Cliente {
    nome
    cpf
    endereco
    numeroCelular

    constructor(nome, cpf, endereco, numeroCelular){
        this.setNome(nome)
        this.validaCPF(cpf)
        this.setEndereco(endereco)
        this.setNumeroCelular(numeroCelular)
    }

    getNome(){
        return this.nome
    }

    setNome(nome){
        this.nome = nome
    }

    getEndereco(){
        return this.endereco
    }

    setEndereco(endereco){
        this.endereco = endereco
    }

    getNumeroCelular(){
        return this.numeroCelular
    }

    setNumeroCelular(numero){
        this.numeroCelular = numero
    }

    getCPF(){
        return this.cpf
    }

    setCPF(cpf){
        this.cpf = cpf
    }

    éSequencia(cpf){
        return cpf.charAt(0).repeat(11) === this.getCPF()
    }

    /**
     * Função de validação de CPF conforme fórmula utilizada pela Receita Federal.
     * 
     * Algoritmo retirado do seguinte artigo: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
     * 
     * Depois adaptado para este caso de uso pra funcionar na classe Cliente deste exercício.
     *  
     */

    validaCPF(strCPF){
        if(strCPF.length == 14){

            for (const key in strCPF){
                if(strCPF[key] == "."){
                    strCPF = strCPF.replace(".", "")
                }else if(strCPF[key] == "-"){
                    strCPF = strCPF.replace("-", "")
                }
            }

            var Soma;
            var Resto;
            Soma = 0;
         
            for (let i = 1; i <= 9; i++){
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
                Resto = (Soma * 10) % 11;
            } 

            if ((Resto == 10) || (Resto == 11)){
                Resto = 0;
            }  

            if (Resto != parseInt(strCPF.substring(9, 10)) ){
                
                return false;
            } 

            Soma = 0;
            for (let i = 1; i <= 10; i++){
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

                Resto = (Soma * 10) % 11;
            } 
    
            if ((Resto == 10) || (Resto == 11)){
                Resto = 0;
            }  
            
            if (Resto != parseInt(strCPF.substring(10, 11) ) ){ 
                return false;
            } 

            this.setCPF(strCPF)

            if(this.éSequencia(strCPF)) return false
            
            return strCPF;
        }else{
            
            return false;
        }
        
    }

}
