import {
    DATA_TABLE,
    GET_MIS_MESAJES_ERROR,
    GET_MIS_MESAJES_SUCCESS
} from '../Types/index'
import {ExceptionController} from '../exceptions/exceptions';
import ClientAxios from '../config/fakeAxios'
import {API_MENSAJES} from '../../Services/Utils/Constants'

export function mensajesAction(){
    return async (dispatch) =>{
        dispatch(dataT());

        await ClientAxios.get(API_MENSAJES,{
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        ).then((response) =>{
            dispatch(miMensajeSuccess(response.data.data)); 
        },(error) => {
            
           
           if(error.response===undefined){
            dispatch(miMensajeError(ExceptionController(404,'Verifique coneccion')))
           }else
            dispatch(miMensajeError(ExceptionController(error.response.status,error.response.data.Message)))
        });
    }
}

const dataT = () =>({
    type: DATA_TABLE
})
const miMensajeSuccess=data=>({
    type: GET_MIS_MESAJES_SUCCESS,
    payload: data
})
const miMensajeError=state=>({
    type: GET_MIS_MESAJES_ERROR,
    payload: state
})