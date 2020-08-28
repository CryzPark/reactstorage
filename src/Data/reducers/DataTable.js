
import {
    DATA_TABLE,
    GET_MI_SALDO_ERROR,
    GET_MI_SALDO_SUCCESS,  
   } from '../Types/index'
   
   const initialState= {
       MiSaldo:[],
       SaldoGeneral:[],
       MorosidadGeneral:[],
       error:null,
       loading:false
   }

export default function  (state = initialState, action)  {
    switch (action.type) {
        case DATA_TABLE:
            return {
                ...state,
                loading: true
            }
        case GET_MI_SALDO_SUCCESS:
            return {
                ...state,
                loading: false,
                MiSaldo: [action.payload]
            }
        case GET_MI_SALDO_ERROR:
            return{
                ...state,
                loading: false,
                error: [action.payload]
            }
        default:
            return state
    }
}