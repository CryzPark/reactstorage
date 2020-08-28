import React from 'react';
import CustomModal from '../../Generic Components/Modal/CustomModal'
import { Modal } from '@material-ui/core';
const SideMenuModal = (props) =>
{
    const data = props.data
    const open = props.open
    const handleClose = props.handleClose
    return(
    <Modal
        open={open}
        onClose={handleClose}
        className = 'modal'
    > 
        <CustomModal data={data} close={handleClose} children={props.children}/>   
                   
    </Modal>
    )
}

export default SideMenuModal