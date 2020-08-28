import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../Types/index'
import {ExceptionController} from '../exceptions/exceptions';
import { logIn } from '../../Services/Routes';
import {API_LOGIN}  from '../../Services/Utils/Constants' 
import ClientAxios from '../config/axios'

export function logins(user){
    return async (dispatch) =>{
        dispatch(login());
        
         
            await ClientAxios.post(API_LOGIN ,user,{
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            
            ).then((response) =>{
                logIn(response.data.data.token)
                dispatch(loginSuccess(response.data)); 
            },(error) => {
                
               
               if(error.response===undefined){
                //login fake
                logIn('sadsad')
                dispatch(loginSuccess([])); 
                //en
                dispatch(loginError(ExceptionController(404,'Verifique coneccion')))
                
               }else
                dispatch(loginError(ExceptionController(error.response.status,error.response.data.Message)))
            });
           
      
    }
}
const login = ()=>({
    type: LOGIN
})
const loginSuccess=user=>({
    type: LOGIN_SUCCESS,
    payload: user
})
const loginError=state=>({
    type: LOGIN_ERROR,
    payload: state
})