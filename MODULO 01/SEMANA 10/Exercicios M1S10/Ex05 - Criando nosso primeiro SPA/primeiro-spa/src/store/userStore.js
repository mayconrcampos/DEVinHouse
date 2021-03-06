
export default {
    state() {
        return {

            login: {
                usuarios: [
                    { "id": "26357846", "nome": "Maycon Campos", "email": "maycon.campos@gmail.com", "senha": "1234" },
                    { "id": "15201251", "nome": "Ary Dionel", "email": "arydionel@gmail.com", "senha": "1234" }
                ]
            },
            validaAddUser: {
                nome: null,
                email: null,
                senha1: null,
                senha2: null,
                emailExiste: null,
                mensagemEmailExiste: null,
                mensagemSenhasDiferentes: null,
                mensagemSucesso: null
            },
            token: false,
            idUser: null,
            existeEmail: false,
            senhaCerta: false,
            mensagem: "",
            usuarioLogado: ""

        }
    },
    mutations: {
        setUsuarioLogado(state, usuario) {
            state.usuarioLogado = usuario
        },
        addUsuario(state, user) {
            state.login.usuarios.push(user)
        },
        setIdUser(state, id) {
            state.idUser = id
        },
        setSenhaCerta(state, valor) {
            state.senhaCerta = valor
        },
        setExisteEmail(state, valor) {
            state.existeEmail = valor
        },
        setMensagem(state, msg) {
            state.mensagem = msg
        },
        setToken(state, token) {
            state.token = token
        },
        setValidaNome(state, nome) {
            state.validaAddUser.nome = nome
        },
        setValidaEmail(state, email) {
            state.validaAddUser.email = email
        },
        setValidaSenha1(state, senha1) {
            state.validaAddUser.senha1 = senha1
        },
        setValidaSenha2(state, senha2) {
            state.validaAddUser.senha2 = senha2
        },
        setValidaEmailExiste(state, valor) {
            state.validaAddUser.emailExiste = valor
        },
        setMensagemEmailExiste(state, mensagem) {
            state.validaAddUser.mensagemEmailExiste = mensagem
        },
        setMensagemSucesso(state, mensagem) {
            state.validaAddUser.mensagemSucesso = mensagem
        },
        setMensagemSenhaDiferente(state, mensagem) {
            state.validaAddUser.mensagemSenhasDiferentes = mensagem
        },


    },
    actions: {
        addUser(context, user) {
            // Zerando todas as vari??veis de valida????o de user
            context.commit("setValidaNome", null)
            context.commit("setValidaEmail", null)
            context.commit("setValidaSenha1", null)
            context.commit("setValidaSenha2", null)
            context.commit("setValidaEmailExiste", null)
            context.commit("setMensagemEmailExiste", null)
            context.commit("setMensagemSucesso", null)
            context.commit("setMensagemSenhaDiferente", null)
            // Verificando se inputs vieram vazios
            if (!user.nome) {
                context.commit("setValidaNome", false)
                return
            }
            if (!user.email) {
                context.commit("setValidaEmail", false)
                return
            }
            if (!user.senha1) {
                context.commit("setValidaSenha1", false)
                return
            }
            if (!user.senha2) {
                context.commit("setValidaSenha2", false)
                return
            }

            // Verificando se usu??rio j?? existe
            context.state.login.usuarios.forEach((usuario) => {
                if (user.email === usuario.email) {
                    context.commit("setValidaEmailExiste", true)

                }
            })

            // Se existir, envia mensagem na tela
            if (context.state.validaAddUser.emailExiste) {
                context.commit("setMensagemEmailExiste", `Usu??rio ${user.email} j?? est?? cadastrado.`)

                // Se n??o existe, prossegue com valida????o das senhas digitadas
            } else {
                // Se ambas as senhas forem iguais, insere novo usu??rio no cadastro
                if (user.senha1 === user.senha2) {
                    context.commit("addUsuario", {
                        "id": user.id,
                        "nome": user.nome,
                        "email": user.email,
                        "senha": user.senha1
                    })
                    context.commit("setMensagemSucesso", "Usu??rio criado com sucesso!")

                    // Se n??o forem iguais, mostra mensagem de erro na tela
                } else {
                    context.commit("setMensagemSenhaDiferente", "ERRO! Senhas n??o conferem. Tente novamente!")
                }
            }
        },
        auth(context, user) {
            if (context.state.token == true) {
                context.commit("setMensagem", "Voc?? j?? est?? logado no sistema.")
                return
            } else {
                context.commit("setExisteEmail", false)
                context.commit("setSenhaCerta", false)
                context.commit("setMensagem", "")
            }


            context.state.login.usuarios.forEach(usuario => {
                if (usuario.email == user.email) {
                    context.commit("setExisteEmail", true)
                    context.commit("setMensagem", "ERRO! Usu??rio j?? est?? cadastrado no sistema.")
                }
            })
            if (context.state.existeEmail == true) {
                context.state.login.usuarios.forEach(usuario => {
                    if (usuario.email == user.email && usuario.senha == user.senha) {
                        context.commit("setSenhaCerta", true)
                        context.commit("setIdUser", usuario.id)
                    }
                })
                if (context.state.senhaCerta == true) {
                    context.commit("setMensagem", "Usu??rio logado com sucesso!")
                    context.commit("setToken", true)
                    context.commit("setUsuarioLogado", user.email)



                } else {
                    context.commit("setMensagem", "Erro! Senha inv??lida.")
                    context.commit("setToken", false)
                }

            } else {
                context.commit("setExisteEmail", false)
                context.commit("setToken", false)
                context.commit("setMensagem", "Erro! Usu??rio inv??lido.")

            }
        },
        logoff(context) {
            context.commit("setToken", false)
            context.commit("setMensagem", null)
            context.commit("setSenhaCerta", false)
            context.commit("setExisteEmail", false)
            context.commit("setIdUser", null)
            context.commit("setUsuarioLogado", null)
        },
        salvaUserDB(context) {
            if (context.state.login.usuarios.length >= 0) {
                var dados = JSON.stringify(context.state.login.usuarios)
                localStorage.setItem("cadastroUsuarios", dados)
            }
        },
        carregaUserDB(context) {
            try {
                var dados = localStorage.getItem("cadastroUsuarios")

                if (dados.length > 0 || dados !== null) {
                    dados = JSON.parse(dados)
                    for (let index = 0; index < dados.length; index++) {
                        context.commit("addUsuario", dados[index])
                    }
                }

            } catch (error) {
                console.log("Error do console log: " + error)
            }
        }

    },
    getters: {

    }
}