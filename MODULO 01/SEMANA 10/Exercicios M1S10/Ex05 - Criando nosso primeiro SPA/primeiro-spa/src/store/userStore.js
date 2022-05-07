export default {
    state(){
        return {
            login: {
                usuarios: [
                    {"nome": "Maycon Campos", "email": "maycon.campos@gmail.com", "senha": "1234"}
                ]
            },
            token: false,
            existeEmail: false,
            senhaCerta: false,
            mensagem: ""
        }
    },
    mutations: {
        addUsuario(state, user){
            state.login.usuarios.push(user)
        },
        setSenhaCerta(state, valor){
            state.senhaCerta = valor
        },
        setExisteEmail(state, valor){
            state.existeEmail = valor
        },
        setMensagem(state, msg){
            state.mensagem = msg
        },
        setToken(state, token){
            state.token = token
        }
    },
    actions: {
        auth(context, user){
            if(context.state.token == true){
                context.commit("setMensagem", "Você já está logado no sistema.")
                return
            }else{
                context.commit("setExisteEmail", false)
                context.commit("setSenhaCerta", false)
                context.commit("setMensagem", "")
            }
            

            context.state.login.usuarios.forEach(usuario => {
                if(usuario.email == user.email){
                    context.commit("setExisteEmail", true)
                }
            })
            if(context.state.existeEmail == true){
                context.state.login.usuarios.forEach(usuario => {
                    if(usuario.email == user.email && usuario.senha == user.senha){
                        context.commit("setSenhaCerta", true)
                    }
                })
                if(context.state.senhaCerta == true){
                    context.commit("setMensagem", "Usuário logado com sucesso!")
                    context.commit("setToken", true)
                }else{
                    context.commit("setMensagem", "Erro! Senha inválida.")
                    context.commit("setToken", false)
                }

            }else{
                context.commit("setExisteEmail", false)
                context.commit("setToken", false)
                context.commit("setMensagem", "Erro! Usuário inválido.")

            }
        },
        logoff(context, valor){
            context.commit("setToken", valor)
            context.commit("setMensagem", "")
            context.commit("setSenhaCerta", false)
            context.commit("setExisteEmail", false)
        },
        salvaDB(context){
            if(context.state.login.usuarios.length >= 0){
                var dados = JSON.stringify(context.state.pessoas)
                localStorage.setItem("usuarios", dados)
            }
        },
        carregaDB(context){
            try{
                var dados = localStorage.getItem("cadastroPessoas")

                if(dados.length > 0 || dados !== null){
                    dados = JSON.parse(dados)
                    for (let index = 0; index < dados.length; index++) {
                        context.commit("addUsuario", dados[index])
                    } 
                }

            }catch(error){
                console.log(error)
            }
        }

    },
    getters: {

    }
}