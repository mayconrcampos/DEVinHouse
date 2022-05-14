import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    idUser: "",
    pessoas: "",
    msg_create: "",
    msg_read: "",
    msg_update: "",
    msg_delete: ""

  },
  getters: {

  },
  mutations: {
    setIdUser(state, id) {
      state.idUser = id
    },
    setPessoas(state, pessoas) {
      state.pessoas = pessoas
    },
    setMsgCreate(state, mensagem) {
      state.msg_create = mensagem
    },
    setMsgRead(state, mensagem) {
      state.msg_read = mensagem
    },
    setMsgUpdate(state, mensagem) {
      state.msg_update = mensagem
    },
    setMsgDelete(state, mensagem) {
      state.msg_delete = mensagem
    }
  },
  actions: {
    async getAll(context) {
      context.commit("setMsgRead", "")

      await axios.get(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/`)
        .then(response => {
          context.commit("setPessoas", response.data)
          context.commit("setMsgRead", {
            "msg": `Foram encontrados ${response.data.length} registros.`,
            "erro": false
          })
        })
        .catch(error => {
          context.commit("setMsgRead", {
            "msg": `ERRO ao ler registros! MSG: ${error}`,
            "erro": true
          })
        })
    },
    async getOne(context, payload) {
      context.commit("setMsgRead", "")

      await axios.get(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${payload}`)
        .then(response => {
          context.commit("setPessoas", response.data)
          context.commit("setMsgRead", {
            "msg": "1 Registro encontrado",
            "erro": false
          })
        })
        .catch(() => {
          context.commit("setMsgRead", {
            "msg": `ERRO404! Id não encontrado.`,
            "erro": true
          })
        })
    },
    async insere(context, pessoa) {
      context.commit("setMsgCreate", "")
      await axios.post(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/`, {
        "nome": pessoa.nome,
        "data_nasc": pessoa.data_nasc,
        "cep": pessoa.cep
      })
        .then(response => {
          context.commit("setMsgCreate", {
            "msg": `Pessoa ${response.data.nome} inserida com sucesso.`,
            "erro": false
          })

        })
        .catch(() => {
          context.commit("setMsgCreate", {
            "msg": `ERRO ao inserir registro!`,
            "erro": true
          })
        })
    },
    async edita(context, pessoa) {
      context.commit("setPessoas", "")
      context.commit("setMsgUpdate", "")
      await axios.put(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${pessoa.id}`, {
        "nome": pessoa.nome,
        "data_nasc": pessoa.data_nasc,
        "cep": pessoa.cep
      })
        .then(() => {
          context.commit("setMsgUpdate", {
            "msg": `Registro atualizado com sucesso.`,
            "erro": false
          })
        })
        .catch(error => {
          context.commit("setMsgUpdate", {
            "msg": `ERRO ao atualizar registro! MSG: ${error}`,
            "erro": true
          })
        })
    },
    async excluir(context, id) {
      await axios.delete(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${id}`)
        .then(() => {
          context.commit("setMsgDelete", {
            "msg": "Registro excluido com sucesso.",
            "erro": false
          })
        })
        .catch(() => {
          context.commit("setMsgDelete", {
            "msg": "Erro ao excluir este registro",
            "erro": true
          })
        })
    }
  },
  modules: {
  }
})
