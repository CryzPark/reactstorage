import {
    TEST,
    TEST_SUCCESS,
    TEST_ERROR
} from '../Types/index'

const initialState= {
    value:[{
        n1: null,
        n2: null,
        n3: null
    }],
    error:null,
    loading:false
}
export default function(state = initialState, action){
    switch (action.type) {
        case TEST:
           return {
                ...state,
                loading: true
            }
            case TEST_SUCCESS:
                return {
                     ...state,
                     loading: false,
                     value: [action.payload]
                 }
            case TEST_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: [action.payload]
                }
        default:
            return state;
           
    }
}