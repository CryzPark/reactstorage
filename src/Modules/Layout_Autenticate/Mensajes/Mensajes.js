import React,{useEffect} from 'react';
import Menu from '../../../Components/Specific Components/Menu/Menu.jsx'
import { Fragment } from 'react';

import './Mensajes.css'
import { useDispatch } from 'react-redux';
import {mensajesAction} from '../../../Data/actions/Mensajes'
const Mensajes =({ children })=>{

    const dispach = useDispatch();
    const dt =()=>dispach(mensajesAction())
    useEffect(()=>{
       dt();
    },[]);
 

    return(
        <Fragment>
            <Menu conf={conf}/>
            <br/>
            
                {children}
            
        </Fragment>
        
    );
}
const conf ={
    withSpace: 0,
    divider:false,
    buttonSize: 6,
    className:'submenu',
    button:{
        0:{
            path:'/Mensajes/Anuncios',
            text:'Anuncios',
            icon:'Anuncios',
            className:'fButton'
        },
        1:{
            path:'/Mensajes/Quejas_O_Sugerencias',
            text:'Quejas y Sugerencias',
            icon:'Quejas_O_Sugerencias'
        }
    }
}
export default  Mensajes;