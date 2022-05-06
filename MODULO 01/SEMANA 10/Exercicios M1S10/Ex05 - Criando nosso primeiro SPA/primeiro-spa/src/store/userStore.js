export default {
    state(){
        return {
            login: {
                usuarios: []
            },
            token: ""
        }
    },
    mutations: {
        addUsuario(state, user){
            state.login.usuarios.push(user)
        }
    },
    actions: {

    },
    getters: {

    }
}