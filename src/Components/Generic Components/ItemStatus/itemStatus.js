import React from 'react';
import Box from '@material-ui/core/Box';
import './itemStatus.scss'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment'
const useStyles = makeStyles({
  // style rule
  bar: props => ({
    backgroundColor: props.backgroundColor,
  }),
  icon: props => ({
    color: props.color,
    fill: props.color
  }),
});

const ItemStatus = (props) =>{
    const data = props.data
    const image = props.image
    const conf =props.conf //agregar a icons
    const className = props.className
    var color=conf.color.get(data.status);
    const classes = useStyles({backgroundColor:color, color:color});
    return(
        <Box className={className+' itemStatus'} border={1} borderColor='grey.500'>
            <Grid container className='itemStatusGrid'>
                <Grid item xs={2}>
                    <div className={classes.bar+' ItemStatusBar FloatLeft'}></div> 
                    <div className='ItemStatusImg' style={{ backgroundImage: `url(${data.url})` }}>
                       <div className='ItemStatusText'>
                            <Typography>
                                <p className='statusdd'>{moment(data.date).format('DD')}</p>
                                <p className='statusmm'>{month[parseInt(moment(data.date).format('MM'))][1]}</p>
                                <p className='statusyy' >{moment(data.date).format('YYYY')}</p>
                            </Typography>
                       </div>
                       
                    </div>  
                      
                </Grid>
                <Grid item xs={4}>
                   <div className='ItemStatusTextType'>
                        <Typography>
                            <h4>{data.place}</h4>
                            <p>{data.horario}</p>
                        </Typography>
                    </div>  
                </Grid>
                <Grid className='ItemStatusTextTypes' item xs={4}>
                        <Typography>
                            <h4>{data.tipo}</h4>
                        </Typography>
                </Grid>
                <Grid className={classes.icon+' ItemStatusTextIcon' }item xs={2}>
                    <div className='ItemStatusIcon'>
                        <i className={icons.get(data.status)}/>
                    </div>
                   
                      
                        <Typography>
                            <p>{data.status}</p>
                        </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
const month = {
    1:['Enero','Ene'],
    2:['Febrero','Feb'],
    3:['Marzo','Mar'],
    4:['Abril','Abr'],
    5:['Mayo','May'],
    6:['Julio','Jul'],
    7:['Junio','Jun'],
    8:['Agosto','Ago'],
    9:['Septiembre','Sep'],
    10:['Octubre','Oct'],
    11:['Noviembre','Nov'],
    12:['Diciembre','Dic'],
}
const icons = new Map([['FINALIZADO','icon-finalizado'], ['APROBADO','icon-resuelto'], ['NO DISPONIBLE','icon-no-disponible'],['SOLICITADO','icon-solicitado-1']])

export default ItemStatus