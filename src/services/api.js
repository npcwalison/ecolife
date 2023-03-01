import axios from "axios"

const api = axios.create({
    baseURL: 'http://192.168.254.64:3333'
})

export default api;