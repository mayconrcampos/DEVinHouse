export default {
    state(){
        return {
            pessoas: []
        }
    },
    mutations: {
        addPessoa(state, pessoa){
            state.pessoas.push(pessoa)
        },
        deletaPessoa(state, indice){
            state.pessoas.splice(indice, 1)
        },
        esvaziaPessoas(state){
            state.pessoas = []
        }
    },
    actions: {
        salvaDB(context){
            if(context.state.pessoas.length >= 0){
                var dados = JSON.stringify(context.state.pessoas)
                localStorage.setItem("cadastroPessoas", dados)
            }
        },
        carregaDB(context){
            try{
                var dados = localStorage.getItem("cadastroPessoas")

                

                if(dados.length > 0 || dados !== null){
                    dados = JSON.parse(dados)
                    for (let index = 0; index < dados.length; index++) {
                        context.commit("addPessoa", dados[index])
                    } 
                }

                context.state.pessoas.sort((x, y) => {
                    return Number(x.idade) > Number(y.idade)
                })
            }catch(error){
                console.log(error)
            }
        }

    },
    getters: {

    }
}