import {
    GET_EVENTS,
    GET_EVENTS_ERROR,
    SET_EVENTS_ERROR,
    SET_EVENTS,
    EVENTS  
   } from '../Types/index'

   const initialState= {
    events:[{
        horario: '16:00',
        status: 'SOLICITADO',
        place: 'Salón de Usos Multiples',
        tipo: 'Reunión Familiar',
        url: 'http://www.migdal.com.mx/upload/migdal-arquitectos/media/galerias/ubyzzvhpkv.jpg',
        title: 'Apartado 16:00',
        backgroundColor: 'orange',
        etiqueta: 'asdsad',
        date: '2020-05-22'
      },{
        horario: '16:00',
        status: 'APROBADO',
        place: 'Salón de Usos Multiples',
        tipo: 'Reunión Familiar',
        url: 'http://www.migdal.com.mx/upload/migdal-arquitectos/media/galerias/ubyzzvhpkv.jpg',
        title: 'Apartado 16:00',
        backgroundColor: 'orange',
        etiqueta: 'asdsad',
        date: '2020-06-22'
      },{
        horario: '16:00',
        status: 'FINALIZADO',
        place: 'Salón de Usos Multiples',
        tipo: 'Reunión Familiar',
        url: 'http://www.migdal.com.mx/upload/migdal-arquitectos/media/galerias/ubyzzvhpkv.jpg',
        title: 'Apartado 16:00',
        backgroundColor: 'orange',
        etiqueta: 'asdsad',
        date: '2020-07-22'
      },{
        horario: '16:00',
        status: 'NO DISPONIBLE',
        place: 'Salón de Usos Multiples',
        tipo: 'Reunión Familiar',
        url: 'http://www.migdal.com.mx/upload/migdal-arquitectos/media/galerias/ubyzzvhpkv.jpg',
        title: 'Apartado 16:00',
        backgroundColor: 'orange',
        etiqueta: 'asdsad',
        date: '2020-08-22'
      }],
    error:null,
    loading:false
}
export default function  (state = initialState, action)  {
    switch (action.type) {
        case EVENTS:
            return {
                ...state,
                loading: true
            }
        case GET_EVENTS:
            return {
                ...state,
                loading: false,
                events: [action.payload]
            }
        case GET_EVENTS_ERROR:
            return{
                ...state,
                loading: false,
                error: [action.payload]
            }
            case SET_EVENTS:
            return {
                ...state,
                loading: false,
                events: [...state.events, action.payload]
            }
        case SET_EVENTS_ERROR:
            return{
                ...state,
                loading: false,
                error: [action.payload]
            }
        default:
            return state
    }
}