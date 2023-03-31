import Api from '@/services/Api'//objeto axios

export default {
    index () {
        return Api().get('browse')//obtener datos
    },
    datos () {
        return Api().get('browse')//obtener datos
    }
}
