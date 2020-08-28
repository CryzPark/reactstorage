import React, { Fragment } from 'react';
import {  Grid, Hidden} from '@material-ui/core';
import Menu from './../../Components/Specific Components/Menu/Menu.jsx';
import SideMenu from './../../Components/Specific Components/SideMenu/SideMenu';
import Header from './../../Components/Specific Components/Header/HeaderPrincipal';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Primario} from '../../Services/Utils/Colors'
import Ayuda from './Ayuda/Ayuda'
import './layout.scss'

const Layout = ({ children }) =>{
  const pc = useMediaQuery('(min-width:900px)');

  return(
    <Fragment>
      <Grid container className='mainlayoutcontainer'>
        <Grid item xs={12} >
          <Header color={Primario}/>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
              <Fragment>
                <Hidden smDown>
                  <Grid item xs={2}>
                    <SideMenu/>
                  </Grid>
                </Hidden>
                <Grid item xs={pc===true?10:12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Menu conf={conf}/>
                    </Grid>
                    <Grid item xs={12} className='containerCh'>
                          {children}    
                    </Grid> 
                  </Grid>
                </Grid>
                <Grid item xs={pc===true?10:12} >
                        <Ayuda/> 
                    </Grid>
              </Fragment>    
          </Grid>
        </Grid>
      </Grid>
     
    </Fragment>
  )
    
}
const conf = {
  withSpace: 1,
    divider:true,
    buttonSize: 2,
    button:{
        0:{
            path:'/Inicio',
            text:'Inicio',
            icon:'icon-inicio',
            className:'reduceSize ButtonMenuPrincipal'
        },
        1:{
            path:'/Recibos',
            text:'Recibos',
            icon:'icon-recibo',
            className:'reduceSize ButtonMenuPrincipal'
        },
        2:{
          path:'/Mensajes/Anuncios',
          path2:'/Mensajes/Quejas_O_Sugerencias',
          text:'Mensajes',
          icon:'icon-mensajes',
          className:'reduceSize ButtonMenuPrincipal'
        },
        3:{
          path:'/AreasComunes/Areas',
          path2:'/AreasComunes/Reservas',
          text:'Áreas Comunes',
          icon:'icon-areas-comunes',
          className:'reduceSize ButtonMenuPrincipal'
        }
    }
}
export default Layout