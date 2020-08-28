import axios from 'axios'
const ClientAxios = axios.create({
    baseURL:'http://localhost:52118' //VVARIABLE DE COFIGURACION
})
export default ClientAxios