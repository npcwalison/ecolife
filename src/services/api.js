import axios from "axios"


const api = axios.create({
    //baseURL: 'http://192.168.100.66:3333' //pc house
    baseURL: 'http://192.168.254.64:3333' //pc work
})

export default api;