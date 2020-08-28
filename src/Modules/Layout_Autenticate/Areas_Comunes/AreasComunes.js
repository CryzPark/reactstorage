import React, { Fragment } from 'react';
import Menu from '../../../Components/Specific Components/Menu/Menu.jsx'
const AreasComunes=({children})=>{
    console.log( localStorage.getItem('calendar'))
    return(
        <Fragment>
            <Menu conf={conf}/>
            <br/>
            {children}
        </Fragment>
    )
}
const conf ={
    withSpace: 0,
    divider:false,
    buttonSize: 6,
    className:'submenu',
    button:{
        0:{
            path:'/AreasComunes/Areas',
            text:'Áreas',
            className:'fButton'
        },
        1:{
            path:'/AreasComunes/Reservas',
            text:'Mis Reservaciones',
        }
    }
}
export default AreasComunes