import { combineReducers } from "redux";
import Usuario from './Usuario'
import DataTable from './DataTable'
import Mensajes from './Mensajes'
import Events from './Events'
import Test from './Test'
export default combineReducers({
    test : Test,
    usuario : Usuario,
    dataTable : DataTable,
    mensajes : Mensajes,
    events: Events
})