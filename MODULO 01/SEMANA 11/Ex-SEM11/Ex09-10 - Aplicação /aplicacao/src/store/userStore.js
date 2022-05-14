
export default {
  state: {
    usuarios: [],
    userExists: false,
    confereEmail: false,
    confereSenha: false,
    erroEmailLogin: false,
    erroSenhaLogin: false,
    logado: {
      status: false,
      user: false,
    },
    alertaLogado: false
  },

  mutations: {
    addUser(state, usuario) {
      state.usuarios.push(usuario)
    },
    setUserExists(state, set) {
      state.userExists = set
    },
    setConfereEmail(state, set) {
      state.confereEmail = set
    },
    setConfereSenha(state, set) {
      state.confereSenha = set
    },
    setErroEmailLogin(state, set) {
      state.erroEmailLogin = set
    },
    setErroSenhaLogin(state, set) {
      state.erroSenhaLogin = set
    },
    setLogado(state, set){
      state.logado = set
    },
    setAlertaLogado(state, set){
      state.alertaLogado = set
    }

  },

  actions: {
    addUsuario(context, user) {
      context.commit("setUserExists", false)
      context.state.usuarios.forEach(item => {
        if (user.email == item.email) {
          context.commit('setUserExists', true)
        }
      });

      if (!context.state.userExists) {
        context.commit("addUser", user)
      }


    },
    auth(context, user) {
      context.commit("setAlertaLogado", false)

      context.commit("setConfereEmail", false)
      context.commit("setConfereSenha", false)
      context.commit("setErroEmailLogin", false)
      context.commit("setErroSenhaLogin", false)

      if(context.state.logado.status){
        context.commit("setAlertaLogado", "Você já se encontra logado no sistema")
        return
      }
      
      context.state.usuarios.forEach(item => {
        if (user.email == item.email) {
          context.commit("setConfereEmail", true)
        }
      })
      if (context.state.confereEmail) {
        context.state.usuarios.forEach(item => {
          if (item.senha == user.senha) {
            context.commit("setConfereSenha", true)
          }
        })
        if (context.state.confereSenha) {
          context.commit("setLogado",{
            "status": true,
            "user": user.email
          })


        } else {
          context.commit("setErroSenhaLogin", {
            "msg": "Senha inválida",
            "erro": true
          })
        }

      } else {
        context.commit("setErroEmailLogin", {
          "msg": "Usuário não cadastrado",
          "erro": true
        })
      }
    },
    logoff(context){
      context.commit("setLogado", {
        "status": false,
        "user": ""
      })
    },  
    salvaLocalStorage(context) {
      var dados = JSON.stringify(context.state.usuarios)
      localStorage.setItem("usersList", dados)
    },
    carregaLocalStorage(context) {
      try {
        var dados = localStorage.getItem("usersList")

        if (dados.length > 0 || dados !== null) {
          dados = JSON.parse(dados)
          for (let index = 0; index < dados.length; index++) {
            context.commit("addUser", dados[index])
          }
        }

      } catch (error) {
        console.log("Error do console log: " + error)
      }
    }
  }
}
