import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,//no se puede modificar el state
    state: {//variables 
        token: null,
        user: null,
        isUserLoggedIn: false,
        numero: 0,
    },
    mutations: {//method
        setToken (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            }else{
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user) {
            state.user = user
        },
        contTotal(state, total){
            state.numero = total
        }
    },
    actions: {
        setToken ({commit}, token){
            commit('setToken', token)//llamar a mutation setToken y pasar token
        },
        setUser ({commit}, user){
            commit('setUser', user)//llamar a mutation setToken y pasar token
        },
        contTotal({commit}, total){
            commit('contTotal', total)//llamar a mutation setToken y pasar total
        }
    },
    getters: {
        getcTotal: state => state.numero
    }

})