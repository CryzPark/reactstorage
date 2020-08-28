import React,{Fragment} from 'react';
import ContainerHeader from '../../../../Components/Generic Components/ContainerHeader/ContainerHeader.jsx'
import '../Mensajes.css'
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import GenericInput from '../../../../Components/Generic Components/Input/Input'
import {  useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import GenericButton from '../../../../Components/Generic Components/Button/Button'
import { MensajesFondoBorder } from '../../../../Themes/CustomThemes.js';
const QoS = ({ match }) =>{
    var mensajes = useSelector(state => state.mensajes.Mensajes[0].qos)
    const history = useHistory();
    return(
        <Container maxWidth='md'>
            {isNaN(match.params.id)?
            <Fragment>
                 <GenericInput labelInput='Buscar' className='SearchBar' variant="outlined" size="small" icon={<SearchIcon className='iconAnunciosSearch'/>}/>    
                <br></br>   
                <div style={MensajesFondoBorder} className='ContainerSize ContainerSizeQoS'>
                    {ContainerHeaderList(mensajes)}
                </div> 
                <GenericButton Text='+Agregar' ClassName='AnunciosButton ButtonBorderRadio'/>
            </Fragment>
                
            :
                <Fragment>
                    <IconButton aria-label="Volver" size='small' onClick={e=>history.goBack()}>
                        <ArrowBackIcon /> Volver
                    </IconButton>
                    
                        <ContainerHeader conf={conf} data={mensajes[match.params.id]} type={1}/>   
                    
                </Fragment>
                    
            }   
        </Container>          
    )
}
const conf = {
    footer:false,
    type:'QoS' ,
    size:{
        0:1,
        1:3,
        2:4,
        3:3,
        4:1
    },chat:true
}


const ContainerHeaderList = (mensajes) =>{
    const history = useHistory();
    var container=[];
    for(const aux in mensajes){
        
        container.push(<ContainerHeader conf={conf} funtion={e=>history.push('/Mensajes/Quejas_O_Sugerencias/'+aux)} data={mensajes[aux]} type={0}/>)
        
    }
    return container
}
export default QoS;