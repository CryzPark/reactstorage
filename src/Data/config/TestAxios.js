import axios from 'axios'
const ClientAxios = axios.create({
    baseURL:'http://18.219.56.144:3000'
})
export default ClientAxios