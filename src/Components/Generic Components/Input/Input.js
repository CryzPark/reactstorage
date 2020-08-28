import { TextField, Box} from '@material-ui/core'
import React, { Fragment } from 'react';
import './Input.scss'

const Input = (props) => {
    const iconComponent = props.icon
    const size = props.size;
    const variant = props.variant;
    const className = props.className;
    const id = props.id;
    const type = props.type;
    const Label = props.label;
    const labelInput= props.labelInput
    const style = props.Style;
    const color=props.Color;
    const value = props.Value;
    const Onchange =props.Onchange;
    const name = props.name;
    const error=!props.error;
    const multiline =props.multiline;
    const classNameText = props.classNameText;
    const placeholder = props.placeholder
    const disable = props.disable
    const helpertext = props.helpertext
    return(
        <div className={iconComponent!=null?'inputWhIcon':null}>
            <Box display={Label != null ? '': 'none'}>
                <p className={classNameText}>{Label}</p> 
            </Box>
            {
                iconComponent!=null 
                ?
                    <div className='iconInput'>{iconComponent}</div>
                :
                    null
            }
            
            <TextField disabled={disable} placeholder={placeholder} label={labelInput} helperText={error?helpertext:''} error={props.error === undefined?false: error} name={name} value={value} onChange={Onchange} color={color} style={style} type={type} id={id}  className={className} variant={variant} size={size} multiline={multiline}></TextField>
        </div>
        
    )
}
Input.defaultProps = {
    multiline:false,
    iconComponent:null,
    disable:false
}
export default Input 