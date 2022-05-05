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
        }
    },
    actions: {

    },
    getters: {

    }
}