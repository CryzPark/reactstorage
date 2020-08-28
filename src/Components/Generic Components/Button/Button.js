import React, { Fragment } from 'react';
import {Button} from '@material-ui/core'
import './Button.scss'
function GenericButton(props) {
    const Text = props.Text;
    const Type = props.Type;
    const Funtion = props.OnClick;
    const Variant = props.Variant;
    const ClassName =props.ClassName + ' Button';
    const Size = props.Size;
    const style = props.Style;
    const color=props.Color;
    const icon= props.icon;
    const disabled = props.disabled;
    return(
        <Fragment>
            
            <Button disabled={disabled} startIcon={typeof icon === 'string' || icon instanceof String?<i className={icon+' IconButon'}/>: icon} color={color} style={style} size={Size} type={Type} onClick={Funtion} variant={Variant} className={ClassName} > {Text} </Button>
            
        </Fragment>
    )
}
export default GenericButton;