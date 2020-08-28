import React from 'react';
import Popover from '@material-ui/core/Popover';
import GenericHeader from '../../../Components/Generic Components/Header/GenericHeader.js';

import Input from '../../../Components/Generic Components/Input/Input.js';
import GenericButton from '../../../Components/Generic Components/Button/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import StarBorderIcon from '@material-ui/icons/StarRate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '../../../Components/Generic Components/Button/Button'
import './ayuda.scss'
import {Box, Typography, Divider, Checkbox } from '@material-ui/core';
const Ayuda =()=>{
  const textplaceholder='Cuéntanos que te gusto y que te parece que podríamos mejorar. Para proteger tu privaci-dad no incluyas datos personales '
    const [open, setOpen] = React.useState(false); 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const url =window.location.pathname.split('/');
    const funt = (e) => {
            setOpen(!open)
            setAnchorEl(e.currentTarget);
    }
        const [open2, setOpen2] = React.useState(false); 
        const funt2 = (e) => {
                setOpen2(!open2)
                setAnchorEl(e.currentTarget);
        }
    return(
        <div className={window.location.pathname==='/AreasComunes/Areas'?'footerCalendar footer':url[1]==='Mensajes'?'footerMensajes footer':'footer'} >
        <Button Text='Danos tu opinión' OnClick={funt} ClassName='opinionButton'/>
        <Button Text='¿Necesitas ayuda?' OnClick={funt2} ClassName='ayudaButton'/>     
        <Popover 
          open={open}
          onClose={funt}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            anchorEl={anchorEl}
          >
            <Box width={220} height={400}>          
              <GenericHeader close={funt} textClassName='textheaderAyuda' textPrincipal='Danos tu opinión' className='headerOpinion'/>
              <div className='opContent'>
                <Typography><h5 className='opTitle'>Ayúdanos a mejorar a Community</h5></Typography>
                <Divider className='opDivider'/>
                <Typography><h5 className='opTitle2'>Califica tu experiencia como usuario</h5></Typography>
                  
                  <div className='Oprating'>
                    <StarBorderIcon/>
                    <StarBorderIcon className='starts'/>
                    <StarBorderIcon className='starts'/> 
                    <StarBorderIcon className='starts'/>
                    <StarBorderIcon className='starts'/>
                  </div> 
                  <Input placeholder={textplaceholder}  type='text' className=' inputS opInput' variant="outlined" size="small" multiline='true'/>
                  <Checkbox className='FloatLeft'/><p className='opChekbox'>¿Estás de acuerdo en que te contactemos para recibir más información?</p>
                  <Input placeholder='Correo Electronico' type='email' className=' inputS opCorreo' variant="outlined" size="small" multiline='false' />
                  <GenericButton Text='Enviar' ClassName='EnviarButton'/>
                  <div className='opPrivacityContainer'>
                    <Typography><h5 className='opPrivacity'>Consulta Nuestro Aviso de Privacidad</h5></Typography>
                    <Divider/>
                  </div>
                  
              </div>
              
            </Box>
        </Popover>   
        <Popover 
          open={open2}
          onClose={funt2}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
            anchorEl={anchorEl}
          >
            <Box width={220} height={400}>          
              <GenericHeader close={funt2} textClassName='textheaderAyuda' textPrincipal='¿Necesitas ayuda?' className='headerAyuda'/>
              <div className='opContent'>
                <br></br>
                <div className='ayudaIconsContainer'>
                  <div className='ayudaIconContainer FloatLeft ayudaSelect'>
                        <i className='icon-preguntas ayudaIcons ayudaSelect' onClick={e=>console.log('ola')}/>
                        <Typography><h5 className='ayudaIconsText'>Preguntas Frecuentes</h5></Typography>
                    </div>
                    <div className='ayudaIconContainer FloatLeft'>
                        <i className='icon-contacto ayudaIcons' onClick={e=>console.log('ola')}/>
                        <Typography><h5 className='ayudaIconsText'>Contacto<br/>Directo</h5></Typography>
                    </div>
                    <div className='ayudaIconContainer FloatLeft'>
                        <i className='icon-consulta ayudaIcons' onClick={e=>console.log('ola')}/>
                        <Typography><h5 className='ayudaIconsText'>Consultas Anteriores</h5></Typography>
                    </div>
                </div>
                  
                  <Typography><h5 className='ayudaTittleText'>Preguntas Frecuentes</h5></Typography>
                  <br></br>
                  <ExpansionPanel className='ayudaPanel'>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                      >
                        ¿Cómo le hago para verificar mi dirección?
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails >
                        <Typography color="textSecondary">
                            <span className='ayudaPanelText'>¿Cómo le hago para verificar mi dirección?</span>
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel className='ayudaPanel'>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                      >
                        ¿Cómo consulto el detalle de mi saldo?
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails >
                        <Typography color="textSecondary">
                            <span className='ayudaPanelText'>¿Cómo consulto el detalle de mi saldo?</span>
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel className='ayudaPanel'>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                      >
                        ¿Cuándo puedo cambiarme a Community?
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails >
                        <Typography color="textSecondary">
                            <span className='ayudaPanelText'>¿Cuándo puedo cambiarme a Community?</span>
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  
              </div>
              
            </Box>
        </Popover>                           
    </div>
    )
}
export default Ayuda;