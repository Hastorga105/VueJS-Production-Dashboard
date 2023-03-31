import axios from 'axios'//Conectar con el backend

export default () => {
    return axios.create({
        baseURL: `http://localhost:8081/`
    })
}