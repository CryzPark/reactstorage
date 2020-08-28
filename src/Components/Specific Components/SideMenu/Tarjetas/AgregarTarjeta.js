import React,{Fragment} from 'react';
import './tarjetas.scss'
import { Typography, Divider, FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
import Input from '../../../Generic Components/Input/Input';
import MomentUtils from '@date-io/moment';
import moment from 'moment'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import GenericButton from '../../../Generic Components/Button/Button';
const AgregarTarjeta = () =>{
    const [checked, setChecked] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date(moment().format('YYYY-MM-DD')));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
      console.log(checked)
    return(
        <Fragment>
            <Typography><p className='TittleTarjetas'>Agrgar una Tarjeta de credito o debito</p></Typography>
            <Divider></Divider>
            <Typography><p className='AgregarTarjeta TarjetaAddInfo'>Introdusca su informacion de la tarjeta de credito</p></Typography>
            <div>
                <FormControl  className="AddTarjetas" component="fieldset">
                    <FormControlLabel className='formRadioTarjeta' value='true' control={<Checkbox onChange={handleChange} checked={checked} className='RadioTj'/>} label="Usar el Nombre de mi Cuenta" />
                    <Input placeholder='Nombre de la Tarjeta' type='email' disable={checked} className={checked===true?'TarjetasInputSelect'+' inputS  TarjetasInput':' inputS  TarjetasInput'} variant="outlined" size="small" multiline='false' />
                    <Input placeholder='Numero de Tarjeta' type='email' className=' inputS  TarjetasInput' variant="outlined" size="small" multiline='false' />
                    <Typography ><p className='vigenciaTarjeta'>Fecha de Vigencia</p></Typography>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker
                        disableToolbar
                        className='pickerVigencia'
                        variant="inline"
                        format="MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label=""
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </MuiPickersUtilsProvider>
                    <GenericButton Text='Agregar Tarjeta' ClassName='TarjetasButton'/>
                </FormControl>
            </div>
        </Fragment>
    )
}
export default AgregarTarjeta