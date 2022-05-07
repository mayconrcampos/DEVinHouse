
export default {
    state(){
        return {
           
            login: {
                usuarios: [
                    {"id": "26357846", "nome": "Maycon Campos", "email": "maycon.campos@gmail.com", "senha": "1234"},
                    {"id": "15201251", "nome": "Ary Dionel", "email": "arydionel@gmail.com", "senha": "1234"}
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
        setUsuarioLogado(state, usuario){
            state.usuarioLogado = usuario
        },
        addUsuario(state, user){
            state.login.usuarios.push(user)
        },
        setIdUser(state, id){
            state.idUser = id
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
        },
        setValidaNome(state, nome){
            state.validaAddUser.nome = nome
        },
        setValidaEmail(state, email){
            state.validaAddUser.email = email
        },
        setValidaSenha1(state, senha1){
            state.validaAddUser.senha1 = senha1
        },
        setValidaSenha2(state, senha2){
            state.validaAddUser.senha2 = senha2
        },
        setValidaEmailExiste(state, valor){
            state.validaAddUser.emailExiste = valor
        },
        setMensagemEmailExiste(state, mensagem){
            state.validaAddUser.mensagemEmailExiste = mensagem
        },
        setMensagemSucesso(state, mensagem){
            state.validaAddUser.mensagemSucesso = mensagem
        },
        setMensagemSenhaDiferente(state, mensagem){
            state.validaAddUser.mensagemSenhasDiferentes = mensagem
        },
        
    
    },
    actions: {
        addUser(context, user){
            // Zerando todas as variáveis de validação de user
            context.commit("setValidaNome", null)
            context.commit("setValidaEmail", null)
            context.commit("setValidaSenha1", null)
            context.commit("setValidaSenha2", null)
            context.commit("setValidaEmailExiste", null)
            context.commit("setMensagemEmailExiste", null)
            context.commit("setMensagemSucesso", null)
            context.commit("setMensagemSenhaDiferente", null)
            // Verificando se inputs vieram vazios
            if(!user.nome){
                context.commit("setValidaNome", false)
                return
            }
            if(!user.email){
                context.commit("setValidaEmail", false)
                return
            }
            if(!user.senha1){
                context.commit("setValidaSenha1", false)
                return
            }
            if(!user.senha2){
                context.commit("setValidaSenha2", false)
                return
            }

            // Verificando se usuário já existe
            context.state.login.usuarios.forEach((usuario) => {
                if(user.email === usuario.email){
                    context.commit("setValidaEmailExiste", true)
                    
                }
            })

            // Se existir, envia mensagem na tela
            if(context.state.validaAddUser.emailExiste){
                context.commit("setMensagemEmailExiste", `Usuário ${user.email} já está cadastrado.`)
            
                // Se não existe, prossegue com validação das senhas digitadas
            }else{
                // Se ambas as senhas forem iguais, insere novo usuário no cadastro
                if(user.senha1 === user.senha2){
                    context.commit("addUsuario", {
                        "id": user.id,
                        "nome": user.nome,
                        "email": user.email,
                        "senha": user.senha1
                    })
                    context.commit("setMensagemSucesso", "Usuário criado com sucesso!")

                // Se não forem iguais, mostra mensagem de erro na tela
                }else{
                    context.commit("setMensagemSenhaDiferente", "ERRO! Senhas não conferem. Tente novamente!")
                }
            }
        },
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
                        context.commit("setIdUser", usuario.id)
                    }
                })
                if(context.state.senhaCerta == true){
                    context.commit("setMensagem", "Usuário logado com sucesso!")
                    context.commit("setToken", true)
                    context.commit("setUsuarioLogado", user.email)
        
        
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
        logoff(context){
            context.commit("setToken", null)
            context.commit("setMensagem", null)
            context.commit("setSenhaCerta", false)
            context.commit("setExisteEmail", false)
            context.commit("setIdUser", null)
            context.commit("setUsuarioLogado", null)
        },
        salvaUserDB(context){
            if(context.state.login.usuarios.length >= 0){
                var dados = JSON.stringify(context.state.pessoas)
                localStorage.setItem("usuarios", dados)
            }
        },
        carregaUserDB(context){
            try{
                var dados = localStorage.getItem("cadastroPessoas")

                if(dados.length > 0 || dados !== null){
                    dados = JSON.parse(dados)
                    for (let index = 0; index < dados.length; index++) {

                        context.commit("addUsuario", dados[index])
                    } 
                }

            }catch(error){
                console.log("Error do console log: "+error)
            }
        }

    },
    getters: {

    }
}