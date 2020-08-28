import axios from 'axios'
const ClientAxios = axios.create({
    baseURL:'https://localhost:44352'
})
export default ClientAxios