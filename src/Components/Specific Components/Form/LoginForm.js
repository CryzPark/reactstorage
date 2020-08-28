import React,{useState} from 'react';
import {Grid, Box,FormControl,FormHelperText, Typography} from '@material-ui/core'
import './LoginForm.scss'
import Input from '../../Generic Components/Input/Input' 
import GenericButon from '../../Generic Components/Button/Button'
import theme from './../../../Themes/Themes'
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {logins} from '../../../Data/actions/login' 
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import validations from '../../../Validation/FormValidations'

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const LoginForm = (props) =>
{
    const tenant='testfracc'
    const [validation, setvalidation] = useState({
        email : true,
        password : true
    })
    //react-redux funtion for actions 
    const dispach = useDispatch();

    const loading = useSelector(state => state.usuario.loading)
    
    const Error = useSelector(state => state.usuario.error)

    //call login from actions
    const loginUser= user => dispach(logins(user))
    
    const submitLogin = e =>{
        e.preventDefault();
        let password = e.target.password.value;
        let email = e.target.email.value;
        let validEmail = validations('email',email)
        let validPassword = validations('password',password)
        //validar
        //sin errores
        //login
        setvalidation({
            email: validEmail,
            password: validPassword
        })
        if(validEmail&& validPassword){
            let data = ({
                Password: password,
                Username: email,
                Subdomain: tenant
            })
            loginUser(data);
            console.log(Error)
        }
        
    }

    const type=props.login;

    const Login=(state)=>{
        return state === 'login'
    }

    const classes = useStyles();

    return(
        <div>
        <Grid container direction="column" justify="center" alignItems="stretch">
            <form  onSubmit={submitLogin} className='FormLogin'  >
                <Grid item xs={12}>
                    <Input classNameText='InputLoginText' helpertext='email incorrecto' error={validation.email} name='email' type='text' className='FormLoginInput InputButton' variant="outlined" size="small" label='Email'/>
                </Grid>
                <Box display={Login(type) ? '':'none'}>
                    <Grid item xs={12}>
                        <Input classNameText='InputLoginText' helpertext='password incorrecta' error={validation.password} name='password' type='password' className='FormLoginInput InputButton' variant="outlined" size="small" label='Contraseña'/>
                    </Grid>
                </Box>
                <Box display={Login(type) ? 'none':''}>
                    <Grid item xs={12}>
                    <br></br>
                    <br></br>
                    </Grid>
                </Box>
                <Grid item xs={12}>
                    
                    {Error===null?<br></br> :
                        <FormControl error={Error[0].state }>
                            <FormHelperText ><Typography align='center' color='error'>{Error[0].Message}</Typography></FormHelperText>
                            <br/>
                        </FormControl>
                        
                    }
                    
                </Grid>
                <Grid item xs={12} >
                <Box display={Login(type) ? '':'none'}>
                    <br></br>
                </Box>
                <GenericButon Style={theme.palette.borderButton} Type="submit" variant="contained" ClassName='SubmitLogin LoginButton' 
                Text={Login(type)?'Iniciar Sesión':'Recuperar Contraseña'} 
                OnClick={Login(type)?/*() => handleLogin()*/ null : event =>  window.location.href='/signin'}
                />
                </Grid>
            </form>
            
        </Grid>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default LoginForm