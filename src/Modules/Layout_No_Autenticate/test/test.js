import React from 'react';
import {testAct} from '../../../Data/actions/test'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import Input from '../../../Components/Generic Components/Input/Input';
import GenericButton from '../../../Components/Generic Components/Button/Button';
const Testp=()=>{ 
    const dispach = useDispatch();
    const Error = useSelector(state => state.test.error)
    const sum= res => dispach(testAct(res))
    var mensajes = useSelector(state => state.test.value[0].n3)
    const submitsum = e =>{
        e.preventDefault();
        let n1 = e.target.n1.value;
        let n2 = e.target.n2.value;
 
  
            let data = ({
                n1: n1,
                n2: n2,
                
            })
            sum(data);
            console.log(Error)
        }
        return(
            <Container fixed>
                <form onSubmit={submitsum}>
                 <Input classNameText='InputLoginText' name='n1'  className='FormLoginInput InputButton' variant="outlined" size="small" label='n1'/>
                 <Input classNameText='InputLoginText' name='n2'  className='FormLoginInput InputButton' variant="outlined" size="small" label='n2'/>
                 <br/>
                 <GenericButton Text='Resultado' Type="submit" variant="contained" ClassName='SubmitLogin LoginButton'/>
                </form>
                <br/>
                <Typography>Resultado = {mensajes}</Typography> 
            </Container>
        )
    }
export default Testp