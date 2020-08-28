import React from 'react';
import LoginForm from './../../../Components/Specific Components/Form/LoginForm'
import { Container , Link} from '@material-ui/core';
import './SignIn.scss';
import logo from './../../../Media/CommunityLogin.png'
import theme from './../../../Themes/Themes'
const Login = () =>(
    <Container className='Login' maxWidth='xs' >
        <Container className='Login' maxWidth='md'>
            <img alt='d' className='LoginImage' src={logo}/>
            <br></br>
            <br></br>
            <LoginForm login='login'/>
            <br></br>
            <Link className='link'  href="forgetmypassword" style={theme.palette.linkText} >
                Olvidé mi contraseña 
            </Link>
        </Container>
    </Container>
)
export default Login