import React, { Fragment } from 'react';
import { Grid, Avatar, IconButton, Hidden} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './dropdown.scss'
import GenericButton from './../../Generic Components/Button/Button'
import { logout } from '../../../Services/Routes';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Modal from './ModalUser'
import Profile from './profile/profile'
const handleLogout = () => {
    logout();
}

function Dropdown(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false); 
    const funt = (e) => {
            setOpen(!open)
            setAnchorEl(e.currentTarget);
    }
    const pc = useMediaQuery('(min-width:900px)');
    const [openModal, setOpenModal] = React.useState(false);
    const handleClose = () => {
        setOpenModal(false);
      };
   return(
       <div >
        <Grid container alignContent='stretch'>
            <Fragment>
                <Hidden smDown>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={7} className='HeaderText'>
                        <div >
                            <p> Hanna Castañeda</p>
                        </div>
                    </Grid>
                </Hidden>
                
                    <Grid item xs={pc===true?2:12} className='AvatarHeader'>
                        <IconButton onClick={funt} className='avatarbutton'><Avatar className='Avatar'>H</Avatar></IconButton>                              
                    <Grid item xs={2}></Grid>
                </Grid>
            </Fragment> 
            <Popover 
            open={open}
            onClose={funt}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
                <Box  border={1} borderTop={0} sizeWidth={20} className='dropMenu'>
                    <Grid container>
                        <Grid item xs={12}>
                            <GenericButton OnClick={e =>setOpenModal(true)} Text='Mi Cuenta.' icon={<PersonIcon className='iconColorDrop'/>} ClassName='ButtonBorder buttonDrop'/>
                        </Grid>
                        <Grid item xs={12}>
                            <GenericButton Text='Cerrar Sesión.' icon={<ExitToAppIcon className='iconColorDrop'/>} ClassName='ButtonBorder buttonDrop' OnClick={e =>handleLogout()}/>
                        </Grid>
                    </Grid>
                </Box>
            </Popover>
            
            </Grid>
            <Modal handleClose={e=> handleClose()} data={data} open={openModal} children ={<Profile/>} />
        </div>
   )
}
const data ={
    tittle:'Mi Cuenta'
}
export default Dropdown