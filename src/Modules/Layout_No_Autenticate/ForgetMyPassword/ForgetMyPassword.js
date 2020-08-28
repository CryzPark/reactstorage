import React from 'react';
import LoginForm from './../../../Components/Specific Components/Form/LoginForm'
import { Container } from '@material-ui/core';
import './../SignIn/SignIn.scss'
import logo from './../../../Media/CommunityLogin.png'
const ForgetMyPassword = () =>(
    <Container className='Login Logins' maxWidth='xs'>
        <Container className='Login Logincontainer' maxWidth='md'>
            <img alt='d' className='LoginImage' src={logo}/>
            <br></br>
            <br></br>
            <LoginForm login=''/>
            <br></br>
        </Container>
    </Container>
)
export default ForgetMyPassword