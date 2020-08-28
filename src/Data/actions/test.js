import {
    TEST,
    TEST_SUCCESS,
    TEST_ERROR
} from '../Types/index'
import {ExceptionController} from '../exceptions/exceptions';
import ClientAxios from '../config/TestAxios'
export function testAct(value){
    return async (dispatch) =>{
        dispatch(test());
            await ClientAxios.post('/usuario' ,value,{
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            
            ).then((response) =>{
                dispatch(testSuccess(response.data.respuesta)); 
            },(error) => {
                
               
               if(error.response===undefined){
                
                dispatch(testError(ExceptionController(404,'Verifique coneccion')))
                
               }else
                dispatch(testError(ExceptionController(error.response.data.codigo,error.response.data.mensaje)))
            });
           
      
    }
}
const test = ()=>({
    type: TEST
})
const testSuccess=res=>({
    type: TEST_SUCCESS,
    payload: res
})
const testError=state=>({
    type: TEST_ERROR,
    payload: state
})