import React from 'react';
import Button from '../../../Generic Components/Button/Button'
import Input from '../../../Generic Components/Input/Input'
import { Grid, Container, Avatar, Typography } from '@material-ui/core';
import './profile.scss'
const profile =()=>
{
    return (
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={3}>
                        <Avatar className='avatarModal'>H</Avatar>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography><p className='profileName'>Hanna Castañeda</p></Typography>
                        <Input className='profileInput' classNameText='profileTxt' label='Correo Electrónico' variant="outlined" size="small"/>
                        <Input className='profileInput' classNameText='profileTxt' label='Nombre' variant="outlined" size="small"/>
                        <Input className='profileInput' classNameText='profileTxt' label='Apellido Paterno' variant="outlined" size="small"/>
                        <Input className='profileInput' classNameText='profileTxt' label='Apellido Materno' variant="outlined" size="small"/>
                        <Input className='profileInput' classNameText='profileTxt' label='Numero Celular' variant="outlined" size="small"/>
                        
                    </Grid>
                    <Button Text='Guardar' Type="submit" variant="contained" ClassName='profileButton ButtonBorderRadio'/>
                </Grid>
            </Container>
        
        
    )
}
export default profile