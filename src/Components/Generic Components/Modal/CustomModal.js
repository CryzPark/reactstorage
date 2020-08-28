import React from 'react';
import './Modal.scss'
import { Toolbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
const ModalCustom = (props) =>{
    const url = props.url
    const data = props.data
    const close = props.close
    return(
        <div className='customModalContainer'>
                <Toolbar variant='regular' className='ModalContainerToolbar custom'>
                    <div className='ModalContainerToolbarTittle FloatLeft'>
                        <h2>{data.tittle}</h2>
                    </div>
                    <IconButton onClick={close} className='FloatRigth buttonclose'><CloseIcon></CloseIcon></IconButton> 
                </Toolbar>
                    {props.children}
            </div>
    )
}
export default ModalCustom