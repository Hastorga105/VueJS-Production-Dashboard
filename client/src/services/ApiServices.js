import Api from '@/services/Api'//objeto axios

export default {
    obtDatos () {
        return Api().get('')//obtener datos
    },
}