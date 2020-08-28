import React, { Fragment } from 'react';
import { Typography, Toolbar, Divider, Checkbox, IconButton } from '@material-ui/core';
import './Modal.scss'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import Input from '../Input/Input'
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import {events} from '../../../Data/actions/events'
const ModalContainer = (props) =>{
    const dispach = useDispatch();
    const createEvent = event => dispach(events(event))

    const url = props.url
    const data = props.data
    const date =props.date
    const onClick = props.onClick
    const close = props.close
    const type= props.type
    //temporal
    const sdate = (data.horario).substring(0,5)
    const edate = (data.horario).substring(8)
    const domicilio = {
        0:sdate,
        1:edate,
      }
      //
      const submitEvent =(e)=>
      {
        e.preventDefault()
        let title = e.target.tittle.value;
        
        let horario = e.target.horario.value
        horario = horario.replace(",","");
        horario = horario.replace(",","");
        horario = horario.replace(",","");
        horario = horario.replace(",","");
        let data = {
            horario:horario,
            status:'SOLICITADO',
            place: e.target.place.value,
            tipo: 'Reunión Familiar',
            url:e.target.img.src,
            title:'Apartado '+ horario,
            backgroundColor:'orange',
            etiqueta: title,
            date: date
        }
        createEvent(data)
        close();
      }
    return(
        <div className='ModalContainer'>
            <Fragment>
                <form className='formModal' onSubmit={submitEvent}>
                <div className='ModalContainerHeader'>
                    
                    <div className='ModalContainerBarr'></div>      
                    <img alt='s' className='ModalContainerImg' name='img' src={url} ></img>
                    <input  name="place" type="hidden" value={data.tittle}></input>
                    <Typography>
                        <h3 className='ModalContainerTextTitle'>{data.tittle}</h3>
                        <p className='ModalContainerText'>Día: <span>{date}</span></p>
                        <p className='ModalContainerText'>Costo: <span>${data.costo}</span></p>
                        <p className='ModalContainerText'>Periodos de uso: <span>{data.periodo}</span></p>
                    </Typography>
            
                    </div>
                    <Divider/>
                   <div>
                    
                    <div className='ModalContainerBodyHeader'>
                    
                    <div>
                        <div className='ModalContainerBodyHeaderDrop'>
                            <p>Horario(s)</p>
                            <Dropdown name='horario' data={domicilio}  variant='outlined' ClassName='contentDropdown drop'/>
                        </div>
                        <div className='ModalContainerBodyHeaderInput'>
                            <p>ETIQUETA DE TU  EVENTO</p>
                            <Input name='tittle'  type='text' className=' inputS' variant="outlined" size="small"/>
                        </div>
                    </div>
                </div>
                <div className='ModalContainerBody'>
                    <div className='ModalContainerBodyReglamento'>
                        <p>
                            <div  dangerouslySetInnerHTML={{ __html:  data.contenido }}></div>
                        </p>
                        <Divider/>
                    </div>
                    <div className='ModalContainerBodyFooter'>
                        <div className='ModalContainerBodyLink'>
                            <a href='#' onClick={onClick}>REGLAMENTO DE USO COMPLETO</a>
                        </div>
                        
                        <div className='ModalContainerBodyCheckbox'>
                            <Checkbox className='FloatLeft'/><p><span>Acepto</span> cumplir el reglamento del area</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                <Divider className='DividerB'/>
                <Button Type="submit" Text='Solicitar Reservación' ClassName='ModalButton ButtonBorderRadio'/>
                
                </div>
                   </div>
                   </form>
            </Fragment>
        </div>
        
    )
}


export default ModalContainer