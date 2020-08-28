import {
    DATA_TABLE,
    GET_MI_SALDO_ERROR,
    GET_MI_SALDO_SUCCESS
} from '../Types/index'
import {ExceptionController} from '../exceptions/exceptions';
import ClientAxios from '../config/fakeAxios'
import {API_DATA_TABLE} from '../../Services/Utils/Constants'
export function dataTable(){
    return async (dispatch) =>{
        dispatch(dataT());

        await ClientAxios.get(API_DATA_TABLE,{//CONSTANT
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        ).then((response) =>{
            dispatch(miSaldoSuccess(response.data.data)); 
        },(error) => {
            
           
           if(error.response===undefined){
            dispatch(miSaldoError(ExceptionController(404,'Verifique coneccion')))
           }else
            dispatch(miSaldoError(ExceptionController(error.response.status,error.response.data.Message)))
        });
    }
}

const dataT = () =>({
    type: DATA_TABLE
})
const miSaldoSuccess=data=>({
    type: GET_MI_SALDO_SUCCESS,
    payload: data
})
const miSaldoError=state=>({
    type: GET_MI_SALDO_ERROR,
    payload: state
})