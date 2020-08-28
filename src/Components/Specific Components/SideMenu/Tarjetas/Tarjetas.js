import React,{Fragment,useState} from 'react';
import './tarjetas.scss'
import { Typography, Divider, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import AgregarTarjeta from './AgregarTarjeta';
import SideMenuModal from '../sideMenuModal';
import GenericButton from '../../../Generic Components/Button/Button';
const Tarjetas = () =>{
    const [value, setValue] = React.useState('female');
    const [open, setOpen] = useState(false);
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
      };
    return(
        <Fragment>
            <Typography><p className='TittleTarjetas'>Selecciona un metodo de Pago</p></Typography>
            <Divider></Divider>
            <FormControl className="SelectTarjetas" component="fieldset">
                <RadioGroup aria-label="tarjeta" name="tarjetas" value={value} onChange={handleChange}>
                    <div className="SelectTarjeta">
                        <div className='FloatLeft InfoTarjetas'>
                            <Typography>
                                <p className='textTarjeta TarjetaType'>MasterCard <span>**** 4826</span></p>
                                <p className='textTarjeta Tarjetainfo'>Hannah Castaneda Garcia</p>
                                <p className='textTarjeta Tarjetainfo'>Vence <span>09/2024</span></p>
                            </Typography>                          
                        </div>
                        <FormControlLabel className='FloatRigth radioText' value="1" control={<Radio className='RadioTj'/>} label="" />
                    </div>
                    <div className="SelectTarjeta">
                        <div className='FloatLeft InfoTarjetas'>
                            <Typography>
                                <p className='textTarjeta TarjetaType'>MasterCard <span>**** 4826</span></p>
                                <p className='textTarjeta Tarjetainfo'>Hannah Castaneda Garcia</p>
                                <p className='textTarjeta Tarjetainfo'>Vence <span>09/2024</span></p>
                            </Typography>                          
                        </div>
                        <FormControlLabel className='FloatRigth radioText' value="2" control={<Radio className='RadioTj'/>} label="" />
                    </div>       
                </RadioGroup>
                <div className='ButtonAgregarTarjeta' onClick={e=>setOpen(true)}>
                <Typography><p className='AgregarTarjeta'>+ Agregar otro metodo de pago</p></Typography>
            </div>
            <GenericButton Text='Pagar Ahora' ClassName='TarjetasButton ButtonTarjeta'/>
            </FormControl>
            
            <SideMenuModal handleClose={e=> handleClose()} data={({
                    tittle:'Agregar otro metodo de pago'
                })} open={open} children ={<AgregarTarjeta/>}/>
        </Fragment>
        
    )
}
export default Tarjetas