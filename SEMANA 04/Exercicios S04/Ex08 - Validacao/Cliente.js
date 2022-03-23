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
            if (strCPF == "00000000000") return false;
            
            /**
             * Multiplicando os Nove primeiros dígitos antes do traço.
             * 
             * Nove primeiros dígitos antes do traço 	1 	2 	3 	4 	5 	6 	7 	8 	9
                    Valor de 10 até 2 para multiplicar 	10 	9 	8 	7 	6 	5 	4 	3 	2
                            Resultado da multiplicação 	10 	18 	24 	28 	30 	30 	28 	24 	18
                
                Multiplicamos as colunas colocando o resultado numa terceira.
                Somamos todos os itens da terceira coluna.
             */
            for (let i = 1; i <= 9; i++){
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
                
                // Com o resultado da soma da terceira coluna, multiplicamos
                // por 10 e então dividimos por 11.
                Resto = (Soma * 10) % 11;
            } 

            // Se o resto da divisão for igual a 10 ou 11, este valor será atribuido 0 automaticamente.
            if ((Resto == 10) || (Resto == 11)){
                Resto = 0;
            }  

            // Se o resto da divisão for igual ao primeiro número do dígito verificador.
            // Se for diferente, CPF inválido.
            if (Resto != parseInt(strCPF.substring(9, 10)) ){
                
                return false;
            } 
            
            // Caso o if acima seja false, então repetimos os passos agora
            // verificando os dez primeiros dígitos

            /**
                 * Dez primeiros dígitos 	1 	2 	3 	4 	5 	6 	7 	8 	9 	0
        Valor de 11 até 2 para multiplicar 	11 	10 	9 	8 	7 	6 	5 	4 	3 	2
                Resultado da multiplicação 	11 	20 	27 	32 	35 	36 	35 	32 	27 	0
             */
            Soma = 0;
            for (let i = 1; i <= 10; i++){
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
                // Somamos novamente a terceora coluna,
                // Multiplicamos a soma vezes 10 dividido por 11.
                Resto = (Soma * 10) % 11;
            } 

            // Se o valor do resto dessa segunda divisão for igual a 10 ou 11,
            // será atribuido 0.
    
            if ((Resto == 10) || (Resto == 11)){
                Resto = 0;
            }  
            
            // Se o resto obtido for igual ao segundo numeral do digito verificador
            // CPF é válido... Não satisfará a condição abaixo
            // Se for diferente, CPF inválido... a condição abaixo será executada e retornará false.
            if (Resto != parseInt(strCPF.substring(10, 11) ) ){
                
                return false;
            } 

            // Se chegar até aqui, CPF validado e terá seu valor retornado.
            this.setCPF(strCPF)
            return strCPF;
        }else{
            
            return false;
        }
        
    }

}
