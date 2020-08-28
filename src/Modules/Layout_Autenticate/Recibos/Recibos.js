import React,{Fragment} from 'react';
import './Recibos.css'
import Table from '../../../Components/Generic Components/Table/Table'
import {  Container, Select } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Dropdown from '../../../Components/Generic Components/Dropdown/Dropdown'
import { BorderBackground, SecondFondo } from '../../../Themes/CustomThemes';

const domicilio = {
    0:'Diamantina #14',
    1:'Diamantina #17',
}
const Fecha = {
    0:'Enero-2019',
    1:'Enero-2019',
}
const obj = {
    0:{
        fecha:"04/01/2019",
        estatus:'PENDIENTE',
        cargo_total:2500.00,
    },
    1:{
        fecha:"04/01/2019",
        estatus:'PENDIENTE',
        cargo_total:2500.00,
    },
    2:{
        fecha:"04/01/2019",
        estatus:'PENDIENTE',
        cargo_total:2500.00,
    },
    3:{
        fecha:"04/01/2019",
        estatus:'PAGADO',
        cargo_total:2500.00,
    },
    4:{
        fecha:"04/01/2019",
        estatus:'PAGADO',
        cargo_total:2500.50,
    },
}
const conf = {
    rowsPerPage : 5,
    iconText:true,
    icons:['PENDIENTE','PAGADO']
}
 const Recibos =()=>{
   
    return(
        <Container maxWidth='md'>
            <br/>
            <br/>  
            <div style={BorderBackground} className='containerRecibos'>
                <div style={SecondFondo} className={' header'}></div>
                <br></br>
                <div>
                    <div className='FloatLeft containerSelectLeft'>
                        <Typography className='FloatLeft containerText containerTextL'>Domicilio:</Typography>
                        <Dropdown data={domicilio}  variant='outlined' ClassName='FloatRight dropdownRecibos'/>
                    </div>
                    <div className='FloatRight containerSelectRight'>
                        <Typography className='FloatLeft containerText containerTextR'>Periodo:</Typography>
                        <Dropdown data={Fecha} variant='outlined' ClassName='FloatRight dropdownRecibos'/>
                    </div>
                    
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Table className='Data' data={obj} conf={conf}/>
            </div>
            
        </Container>
    )
}
export default Recibos