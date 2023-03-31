import Api from '@/services/Api'//objeto axios

export default {
    register (credentials) {
        return Api().post('register', credentials)//exportar objeto register con post a Api(axios)
    },
    login (credentials) {
        return Api().post('login', credentials)
    }
}
