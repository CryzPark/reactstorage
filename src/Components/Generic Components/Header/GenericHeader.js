import React from 'react';
import { Typography,IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
function GenericHeader(props){
    const textPrincipal = props.textPrincipal;
    const textSecundary = props.textSecundary;
    const subText = props.subText;
    const color = props.color;
    const align = props.align;
    const className = props.className;
    const textClassName = props.textClassName;
    const content =props.content;
    const close=props.close;
    return(
        <div className={className} style={color}>
                <Typography color='primary' align={align} variant='subtitle1'> <div className={textClassName}>{textPrincipal}</div> <div>{content}</div> <div>{textSecundary}</div> <div>{subText}</div></Typography>
                {close!==undefined?
                    <IconButton onClick={close} className='FloatRigth buttoncloseHeader'><CloseIcon></CloseIcon></IconButton> 
                :null}
        </div>   
    )
}

export default GenericHeader