import React, { useState, Fragment } from 'react';
import { Container, Toolbar, Hidden, Typography, Grid,Modal,useMediaQuery } from '@material-ui/core';
import Calendar, { Next, Prev } from '../../../../Components/Generic Components/Calendar/Calendar'
import './Areas.css'
import { useSelector } from 'react-redux';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import moment from 'moment'
import Carousel from '../../../../Components/Specific Components/Carousel/Carousel'
import ModalContainer from '../../../../Components/Generic Components/Modal/Modal'
import CustomModal from '../../../../Components/Generic Components/Modal/CustomModal'
import {CALENDARDATE} from '../../../../Services/Utils/Constants'
//juntar en una sola
import {Secundario} from '../../../../Services/Utils/Colors'
import { makeStyles } from '@material-ui/styles';
import {EventFilter} from '../Areas/Events'
import {Device} from '../../../../Services/Utils/Device'
import { BackgroundWhite, ColorWhite, SecondFondo, border } from '../../../../Themes/CustomThemes';
const Colors = makeStyles({
    // style rule
    Header: props => ({
      backgroundColor: Secundario,
    }),
  });
const month = {
    1:['Enero','Ene.'],
    2:['Febrero','Feb.'],
    3:['Marzo','Mar.'],
    4:['Abril','Abr.'],
    5:['Mayo','May.'],
    6:['Julio','Jul.'],
    7:['Junio','Jun.'],
    8:['Agosto','Ago.'],
    9:['Septiembre','Sep.'],
    10:['Octubre','Oct.'],
    11:['Noviembre','Nov.'],
    12:['Diciembre','Dic.'],
}
const Size = (divice)=>{
    switch (divice) {
        case 0:
            return [2,10]
        case 3:
            return [12,12]
        case 4:
            return [2,10]
        default:
            return [3,9]
    }
}

const Areas = () => {
    const classes = Colors();
    var size = Size(Device())
    var eventos = useSelector(state => state.events.events);
    const [open, setOpen] = useState(false);
    const [openRule, setOpenRule] = useState(false);
    const [select,setSelect] = useState('0')
    const [Eventdate,setEventdate] = useState(0)
    const [date, setDate] = useState(moment().format('MM'))
    const Select=(value)=>{
        setSelect(value);
    }
    const modal =(Value,date)=>{
        if (date < moment()){
                  
        }else{
          
          setOpen(true)
          setEventdate(Value);
        }
       
    }
    const handleClose = () => {
        setOpen(false);
      };
    const handleCloseRule = () => {
        setOpenRule(false);
    };
    function nextButton() {
        Next(localStorage.getItem(CALENDARDATE)) 
        setDate(moment(localStorage.getItem(CALENDARDATE)).format('MM'))
    }
    function prevButton() {
        Prev(localStorage.getItem(CALENDARDATE)) 
        setDate(moment(localStorage.getItem(CALENDARDATE)).format('MM'))
    }
    const modalRule=()=>{

        setOpenRule(true)
    }
    return(
        <Container maxWidth='lg' style={BackgroundWhite} className='calendar'>
            <Toolbar style={SecondFondo} className = {' ToolBarCalendar'} variant='regular'>
                <Grid  container>
                    <Grid item xs={6}>
                    <Typography variant='h5' style={ColorWhite} className='ToolBarCalendarTitle'>{data[select].tittle}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <div className ='ToolBarCalendarDiv'>
                    <ArrowForwardIosIcon style={ColorWhite} className='FloatRigth ToolBarCalendarButton' onClick={e=> nextButton()} fontSize="small"></ArrowForwardIosIcon>
                    <ArrowBackIosIcon style={ColorWhite} className=' ToolBarCalendarButton FloatLeft' onClick={e=> prevButton()} fontSize="small"></ArrowBackIosIcon>
                     <div style={BackgroundWhite} className='ToolBarMonth'>
                        <Hidden xsDown>
                            {month[parseInt(date)][0]}
                        </Hidden>
                        <Hidden smUp>
                            {month[parseInt(date)][1]}
                        </Hidden>
                    </div>
                    
                </div>
                    </Grid>
                </Grid>
            </Toolbar>
            
         <Grid container style={border} className='AreasBorder'>
            
             <Fragment>
                <Grid item xs={size[0]}>
                    <Carousel orientation = {Device()===3?'horizontal':'vertical'} conf = {conf} value={select} data = {data} onClick = {Select}/>
                </Grid>
                <Grid item xs={size[1]}>
                    <div className='calendar'>
                        <Calendar dateClick={modal} events={EventFilter(eventos,data,select)}/>
                    </div>
                </Grid>
            </Fragment>
             
            
         </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                className = 'modal'
            > 
                    <ModalContainer
                    onClick={modalRule}
                    close={handleClose}
                    date={Eventdate} data={data[select]} url={data[select].url}/>              
            </Modal>
            <Modal
            open={openRule}
            onClose={handleCloseRule}
            className = 'modal'
            >   
                   <CustomModal data={modalConfs} close={handleCloseRule} children={
                       <div className='ModalContainerText2' dangerouslySetInnerHTML={{ __html:  data[select].rules }}></div>
                   }/>           
                </Modal>
        </Container>
        
    )
}

const conf = {
    width:100,
    heigth:75,
    totalSlider:4,
    visibleSlides:3
}
const modalConfs={
    tittle:'Reglamento de Uso'
}
const data = {
    0: {
        tittle : 'Salón de Usos Multiples',
        costo : '400',
        horario: '16:00 - 22:00',
        disponible: 'VIE, SAB y DOM',
        periodo: '1-6 Horas',
        url: 'http://www.migdal.com.mx/upload/migdal-arquitectos/media/galerias/ubyzzvhpkv.jpg',
        contenido:'<ul><li> El presente reglamento establece las bases y fija </li><li>Los lineamientos generales establecidos en el </li><li>Ingresar y circular dentro del área de estacionamiento</li><li>Ocupar un solo espacio de estacionamiento</li><li>No estacionarse detrás de otro automóvil</li></ul>',
        rules:'DISPOSICIONES<br/>Art.  1.-  El  presente  reglamento  establece  las  bases  y  ja  los  linea-mientos para regular el uso y manejo devehículos dentro del área de estacionamiento de la Escuela de Estu-dios Superiores de Jojutla.<br/>Art. 2.- Los lineamientos generales establecidos en el presente regla-mento fueron analizados, discutidos yaprobados por el Consejo Técnico.<br/>Art.  3.-  Ingresar  y  circular  dentro  del  área  de  estacionamiento  de  la  Escuela de Estudios Superiores deJojutla  a  una  velocidad  máxima  de  5  km/h,  así  como  con  la  mayor  precaución y prudencia.<br/>Art. 4.- Ocupar un solo espacio de estacionamiento<br/>Art. 5.- No estacionarse detrás de otro automóvilArt.<br/>Art.  6.-  No  escuchar  música  a  alto  volumen  mientras  se  permanece  dentro o fuera del automóvil, pues esto entorpece '
    },
    1: {
        tittle : 'Terraza Penthouse',
        costo : '400',
        horario: '16:00 - 22:00',
        disponible: 'VIE, SAB y DOM',
        periodo: '1-6 Horas',
        url: 'https://www.azulparaiso.com.mx/wp-content/uploads/2018/08/IMAGEN-TERRAZA-PENTHOUSE-300x169.jpg',
        contenido:'<ul><li> El presente reglamento establece las bases y fija </li><li>Los lineamientos generales establecidos en el </li><li>Ingresar y circular dentro del área de estacionamiento</li><li>Ocupar un solo espacio de estacionamiento</li><li>No estacionarse detrás de otro automóvil</li></ul>'
    },
    2: {
        tittle : 'Terraza Alberca',
        costo : '400',
        horario: '16:00 - 22:00',
        disponible: 'VIE, SAB y DOM',
        periodo: '1-6 Horas',
        url: 'http://www.liv-ko.com/wp-content/uploads/2012/07/Alberca-terraza-590x442.jpg',
        contenido:'<ul><li> El presente reglamento establece las bases y fija </li><li>Los lineamientos generales establecidos en el </li><li>Ingresar y circular dentro del área de estacionamiento</li><li>Ocupar un solo espacio de estacionamiento</li><li>No estacionarse detrás de otro automóvil</li></ul>'
    },
    3: {
        tittle : 'Terraza Alberca',
        costo : '400',
        horario: '16:00 - 22:00',
        disponible: 'VIE, SAB y DOM',
        periodo: '1-6 Horas',
        url: 'http://www.liv-ko.com/wp-content/uploads/2012/07/Alberca-terraza-590x442.jpg',
        contenido:'<ul><li> El presente reglamento establece las bases y fija </li><li>Los lineamientos generales establecidos en el </li><li>Ingresar y circular dentro del área de estacionamiento</li><li>Ocupar un solo espacio de estacionamiento</li><li>No estacionarse detrás de otro automóvil</li></ul>'
    }
}
export default Areas