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
            context.commit("setMensagem", {
              "msg": `Foram encontrados ${response.data.length} registros.`,
              "erro": false
            })
        })
        .catch(error => {
            context.commit("setMensagem", {
              "msg": `ERRO! ${error}`,
              "erro": true
            })
        })
    },
    async getOne(context, payload){
      context.commit("setMensagem","")
      
      await axios.get(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${payload}`)
        .then(response => {
            context.commit("setPessoas", response.data)
            context.commit("setMensagem", {
              "msg": "1 Registro encontrado",
              "erro": false
            })
        })
        .catch(() => {
            context.commit("setMensagem", {
              "msg": `ERRO404! Id não encontrado.`,
              "erro": true
            })
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
              context.commit("setMensagem",{
                "msg": `Pessoa ${response.data.nome} inserida com sucesso.`,
                "erro": false
              })
              
          })
          .catch(() => {
              context.commit("setMensagem", {
                "msg": `ERRO ao inserir registro!`,
                "erro": true
              })
          })
    },
    async edita(context, pessoa){
          context.commit("setPessoas", "")
          context.commit("setMensagem", "")
          await axios.put(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${pessoa.id}`, {
            "nome": pessoa.nome,
            "data_nasc": pessoa.data_nasc,
            "cep": pessoa.cep
          })
          .then(() => {
            context.commit("setMensagem", {
              "msg": `Registro atualizado com sucesso.`,
              "erro": false
            })
          })
          .catch(error => {
            context.commit("setMensagem", {
              "msg": `ERRO! ${error}`,
              "erro": true
            })
          })
    },
    async excluir(context, id){
      await axios.delete(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${id}`)
      .then(() => {
        context.commit("setMensagem", "Registro excluido com sucesso.")
      })
      .catch(error => {
        context.commit("setMensagem", error)
      })
    }
  },
  modules: {
  }
})
