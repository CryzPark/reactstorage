import {
    DATA_TABLE,
    GET_MIS_MESAJES_ERROR,
    GET_MIS_MESAJES_SUCCESS
   
   } from '../Types/index'
const initialState= {
    Mensajes:{
        0:{
        anuncios:[
            {
              "header": [
                [
                  "21/05/2019",
                  false,
                  null,
                  null
                ],
                [
                  "Reporte Mensual",
                  false,
                  null,
                  null
                ],
                [
                  "Administrador Ramirez",
                  false,
                  null,
                  null
                ]
              ],
              "contenido": "Estimados vecinos/as: <br/> Nos dirigimos a ustedes con motivo de la noti\u001fcación por parte de la compañía eléctrica de la próxima susti-tución de los actuales contadores por unos con discriminación horaria, electrónicos o “inteligentes” Las molestias causadas por los vecinos son un problema delicado y, a veces, difícil de solucionar. En un primer momento, es preferible intentar ponerles \u001fn de manera amigable, comunicándose con el vecino y pidiéndole que abandone el comportamiento.                                          o que tome medidas para que no se perturbe la tran-quilidad de otros."
            },
            {
              "header": [
                [
                  "21/05/2019",
                  false,
                  null,
                  null
                ],
                [
                  "Reporte Mensual",
                  false,
                  null,
                  null
                ],
                [
                  "Administrador Ramirez",
                  false,
                  null,
                  null
                ]
              ],
              "contenido": "Estimados vecinos/as: <br/> Nos dirigimos a ustedes con motivo de la noti\u001fcación por parte de la compañía eléctrica de la próxima susti-tución de los actuales contadores por unos con discriminación horaria, electrónicos o “inteligentes” Las molestias causadas por los vecinos son un problema delicado y, a veces, difícil de solucionar. En un primer momento, es preferible intentar ponerles \u001fn de manera amigable, comunicándose con el vecino y pidiéndole que abandone el comportamiento.                                          o que tome medidas para que no se perturbe la tran-quilidad de otros."
            }
          ],
        qos:[
            {
              "header": [
                [
                  "ACTIVO",
                  true,
                  null,
                  null
                ],
                [
                  "Vecinal",
                  false,
                  null,
                  null
                ],
                [
                  "04/05/2019  10:32",
                  false,
                  null,
                  null
                ],
                [
                  "Folio: 0217",
                  false,
                  null,
                  null
                ],
                [
                  "Mensaje",
                  true,
                  true,
                  5
                ]
              ],
              "chat": [
                {
                  "fecha": "2019-06-14T00:00:00",
                  "mensajes": "test"
                },
                {
                  "fecha": "2019-06-14T00:00:00",
                  "mensajes": "test"
                }
              ],
              "contenido": "Hola, el dia de ayer los hijos del vecino de la casa19 bloque 18 se pusieron a brincar en una de las bancas del parque de callejon del osesno hasta que la rompieron."
            },
            {
              "header": [
                [
                  "ACTIVO",
                  true,
                  null,
                  null
                ],
                [
                  "Vecinal",
                  false,
                  null,
                  null
                ],
                [
                  "04/05/2019  10:32",
                  false,
                  null,
                  null
                ],
                [
                  "Folio: 0217",
                  false,
                  null,
                  null
                ],
                [
                  "Mensaje",
                  true,
                  true,
                  5
                ]
              ],
              "chat": [
                {
                  "fecha": "2019-06-14T00:00:00",
                  "mensajes": "test"
                },
                {
                  "fecha": "2019-06-14T00:00:00",
                  "mensajes": "test"
                }
              ],
              "contenido": "Hola, el dia de ayer los hijos del vecino de la casa19 bloque 18 se pusieron a brincar en una de las bancas del parque de callejon del osesno hasta que la rompieron."
            }
          ]
        }
    },
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
        case GET_MIS_MESAJES_SUCCESS:
            return {
                ...state,
                loading: false,
                Mensajes: [action.payload]
            }
        case GET_MIS_MESAJES_ERROR:
            return{
                ...state,
                loading: false,
                error: [action.payload]
            }
        default:
            return state
    }
}