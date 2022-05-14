
export default {
    state: {
        addUserSuccess: false,
        addUserError: false
    },
    mutations: {
        setAddUserSuccess(state, status){
            state.addUserSuccess = status
        },
        setAddUserError(state, status){
            state.addUserError = status
        }
      
    },
    actions: {
    },
}
