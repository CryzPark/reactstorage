import React,{Fragment} from 'react';
import './image.scss'
import { Typography } from '@material-ui/core';
import { ColorWhite, SecondFondo } from '../../../Themes/CustomThemes';
const Image = (props) =>{
    const Url = props.url
    const Data = props.data
    const onClick = props.onClick
    const value = props.value
    return(
        <Fragment>
            <div style={SecondFondo} className='selectdivside'></div>
            <div onClick={e => onClick(value)} className='MainImage' style={{ backgroundImage: `url(${Url})`  }}>
             
            <div style={ColorWhite} className='TextImage'>
                <div >
                    <Typography className='titleImage'>{Data.tittle}</Typography>
                    <Typography className='InfoImage'>Costo: {Data.costo} <br/> Horario: {Data.horario} <br/> Disponible: {Data.disponible}</Typography>
                </div>
                
            </div>
        </div>
        </Fragment>
        
    )
}
export default  Image