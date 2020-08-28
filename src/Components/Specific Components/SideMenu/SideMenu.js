import React,{useState} from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import GenericButton from '../../Generic Components/Button/Button'
import GenericHeader from '../../Generic Components/Header/GenericHeader'
import './sideMenu.css'
import theme from './../../../Themes/Themes'
import SideMenuModal from './sideMenuModal'
import Facturas from './Facturas/facruras'
import Reglamento from './Reglamento/Reglamento'
import Tarjetas from './Tarjetas/Tarjetas'
import {FondoTitle} from '../../../Services/Utils/Colors'
const Colors = makeStyles({
    // style rule
    header: props => ({
      backgroundColor: FondoTitle,
    })
  });
const MenuBar = () =>{
    const [open, setOpen] = useState(false);
    const [content, setContent]= useState('');
    const [data, setData]= useState('');
    const handleClose = () => {
        setOpen(false);
      };
    const modal =(e)=>{ 
          setOpen(true)
          switch (e) {
              case 1:
                setContent(<Facturas/>)
                setData({
                    tittle:'Facturas'
                })
                  break;
                case 2:
                setContent(<Reglamento/>)
                setData({
                    tittle:'Reglamento'
                })
                    break;
                case 3:
                    setContent(<Tarjetas/>)
                    setData({
                        tittle:'Tarjetas'
                    })
                        break;
              default:
                setContent(<Reglamento/>)
                setData({
                    tittle:'Referencias de pago'
                })
                  break;
          }
    }
    const classes = Colors();
    return(
    
    <div className='border'>
        <Grid container
        direction="column"
        justify="center"
        alignItems="stretch">
            <Grid item xs={12}>
                <div className='SideMenuHeader'>
                    <br></br>
                    <img alt='Logo' src='http://www.misionparaiso.com/wp-content/uploads/2017/03/LOGOTIPO-MISIÓN-PARAÍSO.png'/>
                </div>
            </Grid>
            <Grid item xs={12}>
            <GenericHeader className={classes.header + ' HeaderTittleSide'} textClassName='HeaderTittleTextSide' align='center' textPrincipal='Entrecielos Residencial' /> 
            </Grid>
            <Grid item xs={12}>
                <GenericButton OnClick={e=> modal(1)} icon={<i className='icon-ticket iconColor' />} Text='Enviar Comprobante' ClassName='ButtonBorder buttonside'/>  
            </Grid>
            <Grid item xs={12}>
                <GenericButton OnClick={e=> modal(4)} icon={<i className='icon-pago-efectivo iconColor' />} Text='Referencias  de Pago' ClassName='ButtonBorder buttonside'/>
            </Grid>
            <Grid item xs={12}>
                <GenericButton OnClick={e=> modal(3)} icon={<i className='icon-pago_tarjeta iconColor' />} Text='Mis Tarjetas' ClassName='ButtonBorder buttonside'/>
            </Grid>
            <Grid item xs={12}>
                <GenericButton OnClick={e=> modal(2)} icon={<i className='icon-reglamento iconColor' />} Text='Reglamento Habitacional' ClassName='ButtonBorder buttonside'/>
            </Grid>
        </Grid> 
        <SideMenuModal handleClose={e=> handleClose()} data={data} open={open} children ={content}/>
            
        
    </div>
    
)
}
export default MenuBar
