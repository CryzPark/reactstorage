import {
    GET_EVENTS,
    GET_EVENTS_ERROR,
    SET_EVENTS_ERROR,
    SET_EVENTS,
    EVENTS  
} from '../Types/index'
import {ExceptionController} from '../exceptions/exceptions';
export function events(eventInfo){
    return (dispatch) =>{
                dispatch(event())
                try {
                    dispatch(setEventSussces(eventInfo))
                } catch (error) {
                    dispatch(setEventError(true))
                }   
    }
    
}

const event = () =>({
    type: EVENTS
})
const getEventSussces=data=>({
    type: GET_EVENTS,
    payload: data
})
const getEventError=state=>({
    type: GET_EVENTS_ERROR,
    payload: state
})
const setEventSussces=data=>({
    type: SET_EVENTS,
    payload: data
})
const setEventError=state=>({
    type: SET_EVENTS_ERROR,
    payload: state
})