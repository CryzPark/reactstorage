import {
 LOGIN,
 LOGIN_ERROR,
 LOGIN_SUCCESS

} from '../Types/index'

const initialState= {
    User:[],
    error:null,
    loading:false
}
export default function(state = initialState, action){
    switch (action.type) {
        case LOGIN:
           return {
                ...state,
                loading: true
            }
            case LOGIN_SUCCESS:
                return {
                     ...state,
                     loading: false,
                     User: [action.payload]
                 }
            case LOGIN_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: [action.payload]
                }
        default:
            return state;
           
    }
}