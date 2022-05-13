import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    idUser: "",
    pessoas: "",
    mensagem: ""

  },
  getters: {
    
  },
  mutations: {
    setIdUser(state, id){
      state.idUser = id
    },
    setPessoas(state, pessoas){
      state.pessoas = pessoas
    },
    setMensagem(state, mensagem){
      state.mensagem = mensagem
    }
  },
  actions: {
    async getAll(context){
      context.commit("setMensagem","")

      await axios.get(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/`)
        .then(response => {
            context.commit("setPessoas", response.data)
        })
        .catch(error => {
            context.commit("setMensagem", error)
        })
    },
    async getOne(context, payload){
      context.commit("setMensagem","")
      
      await axios.get(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${payload}`)
        .then(response => {
            context.commit("setPessoas", response.data)
        })
        .catch(error => {
            context.commit("setMensagem", error)
        })
    },
    async insere(context, pessoa){
      context.commit("setMensagem","")
      await axios.post(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/`, {
            "nome": pessoa.nome,
            "data_nasc": pessoa.data_nasc,
            "cep": pessoa.cep
          })
          .then(response => {
              context.commit("setMensagem",`Pessoa ${response.data.nome} inserida com sucesso.`)
              
          })
          .catch(error => {
              this.mensagem = error
          })
    },
    async edita(context, pessoa){
          context.commit("setPessoas", "")
          await axios.put(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${pessoa.id}`, {
            "nome": pessoa.nome,
            "data_nasc": pessoa.data_nasc,
            "cep": pessoa.cep
          })
          .then(() => {
            context.commit("setMensagem",`Registro atualizado com sucesso.`)
          })
          .catch(error => {
            context.commit("setMensagem", error)
          })
    }
  },
  modules: {
  }
})
