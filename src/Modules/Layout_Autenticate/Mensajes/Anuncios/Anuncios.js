  import React, { Fragment } from 'react';
import ContainerHeader from '../../../../Components/Generic Components/ContainerHeader/ContainerHeader.jsx'
import '../Mensajes.css'
import './Anuncios.css'
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import GenericButton from '../../../../Components/Generic Components/Button/Button'
import GenericInput from '../../../../Components/Generic Components/Input/Input'
import {  useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { MensajesFondoBorder } from '../../../../Themes/CustomThemes.js';

const Anuncios = ({ match })=>{
    var mensajes = useSelector(state => state.mensajes.Mensajes[0].anuncios)
    const history = useHistory();
    
    return(
        <Container maxWidth='md'>
            {isNaN(match.params.id)?
            <Fragment>
                <GenericInput labelInput='Buscar' className='SearchBar' variant="outlined" size="small" icon={<SearchIcon className='iconAnunciosSearch'/>}/>    
                <br></br>               
                <div style={MensajesFondoBorder} className='ContainerSize'>
                     {ContainerHeaderList(mensajes)}
                </div> 
            </Fragment>
               
               
            :
                <Fragment>
                    <IconButton aria-label="Volver" size='small' onClick={e=>history.goBack()}>
                        <ArrowBackIcon /> Volver
                    </IconButton>
                    <ContainerHeader  conf={conf}  data={mensajes[match.params.id]} type={1}/>
                    <form className='formAnuncios'>
                        <GenericInput className='FormInput'  variant="outlined" size="small" labelInput="Comentario"/>
                        <GenericButton Text='Enviar' ClassName='AnunciosButton ButtonBorderRadio'/>
                    </form>
                </Fragment>
            }   
        </Container>          
    )
}
const conf = {
    footer:true,
    size:{
        0:2,
        1:4,
        2:6
    }
}
const data = {
    0:{
        header:{
            0:[
               
                '15/15/20'
            ],
            1:[
                
                'Reporte Mensual'
            ],
            3:[
                
                'Administrador Ramirez'
            ]
        },
        contenido : `Estimados vecinos/as:<br/>Nos dirigimos a ustedes con motivo de la notificación por parte de la compañía eléctrica de la próxima susti-tución de los actuales contadores por unos con discriminación horaria, electrónicos o “inteligentes” Las molestias causadas por los vecinos son un problema delicado y, a veces, difícil de solucionar. En un primer momento, es preferible intentar ponerles n de manera amigable, comunicándose con el vecino y pidiéndole que abandone el comportamiento.                                          o que tome medidas para que no se perturbe la tran-quilidad de otros.Estimados vecinos/as:Nos dirigimos a ustedes con motivo de la notificación por parte de la compañía eléctrica de la próxima susti-tución de los actuales contadores por unos con discriminación horaria, electrónicos o “inteligentes” Las molestias causadas por los vecinos son un problema delicado y, a veces, difícil de solucionar. En un primer momento, es preferible intentar ponerles n de manera amigable, comunicándose con el vecino y pidiéndole que abandone el comportamiento.                                          o que tome medidas para que no se perturbe la tran-quilidad de otros.`
    },
    1:{
        header:{
            0:[
                
                '20/15/20'
            ],
            1:[
                
                'Reporte Mensual'
            ],
            3:[
                
                'Administrador Ramirez'
            ]
        },
        contenido : 'Estimados vecinos/as:Nos dirigimos a ustedes con motivo de la notificación por parte de la compañía eléctrica de la próxima susti-tución de los actuales contadores por unos con discriminación horaria, electrónicos o “inteligentes” Las molestias causadas por los vecinos son un problema delicado y, a veces, difícil de solucionar. En un primer momento, es preferible intentar ponerles n de manera amigable, comunicándose con el vecino y pidiéndole que abandone el comportamiento.                                          o que tome medidas para que no se perturbe la tran-quilidad de otros.'
    },
    2:{
        header:{
            0:[
                
                '15/15/20'
            ],
            1:[
                
                'Reporte Mensual'
            ],
            3:[
                
                'Administrador Ramirez'
            ]
        },
        contenido : 'Estimados vecinos/as:Nos dirigimos a ustedes con motivo de la notificación por parte de la compañía eléctrica de la próxima susti-tución de los actuales contadores por unos con discriminación horaria, electrónicos o “inteligentes” Las molestias causadas por los vecinos son un problema delicado y, a veces, difícil de solucionar. En un primer momento, es preferible intentar ponerles n de manera amigable, comunicándose con el vecino y pidiéndole que abandone el comportamiento.                                          o que tome medidas para que no se perturbe la tran-quilidad de otros.'
    },
}

const ContainerHeaderList = (mensajes) =>{
    const history = useHistory();
    var container=[];
    for(const aux in mensajes){
        
        container.push(<ContainerHeader conf={conf} funtion={e=>history.push('/Mensajes/Anuncios/'+aux)} data={mensajes[aux]} type={0}/>)
        
    }
    return container
}
export default Anuncios