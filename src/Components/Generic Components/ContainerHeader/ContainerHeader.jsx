import React from 'react';
import List from '@material-ui/core/List';
import {Toolbar, Typography, Grid, Badge } from '@material-ui/core';
import './ContainerHeader.css'
import MoodIcon from '@material-ui/icons/Mood';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CheckIcon from '@material-ui/icons/Check';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ListItem from '../ListItem/ListItem'
import { ICON } from '../../../Services/Utils/Constants';
const Type = (type) => {
    switch (type) {
        case 0:
            return 'TextContainer Sigle'
            
        case 1:
            return 'TextContainer Multiple'
            
        default:
            return 'TextContainer'
            
    }
}
const icon = (param = '') =>{
    switch (param) {
        case 'ACTIVO':
            return <CheckIcon/>
        case 'Mensaje':
            return <ChatBubbleIcon/> 
        default:
            break;
    }
}
const ContainerHeader = (props) => {
    const conf = props.conf;
    const data = props.data;
    const type = props.type;
    const funtion = props.funtion;
    const className = props.className;
    var i=0;
    var header = Object.values(data.header)
    var size = Object.values(conf.size);
    var chat;
    if(conf.chat==true){
        chat = Object.values(data.chat);
    }
    
    const it = () =>{
        i++
    }
    return(
        <div className= {conf.chat===true?'chatContainer':'ContainerHeader'} >
                <Toolbar variant='dense' className={'ToolbarContainerHeader'}>
                   
                    <Grid container>
                     {
                         header.map((item)=>(
                            <Grid item xs={size[i]}>
                                {it()}
                                {
                                    item[1]===true
                                    ?
                                        item[2]===true 
                                        ?
                                            <Badge color="secondary" overlap="circle" variant="standard" badgeContent={item[3]} showZero>
                                                {icon(item[0])}
                                            </Badge>
                                        :
                                            icon(item[0])
                                    :
                                <Typography><div className='containerHeaderTiTle'>{ICON.get(item[0])===undefined?null:<i className={ICON.get(item[0])[1]+' containerHeaderTiTleIcon'}/>}{item[0]}</div></Typography> 
                                }    
                            </Grid>
                         ))
                     }              
                    </Grid>                                   
                </Toolbar>
                <div className={Type(type)} onClick={funtion}>
                    <br></br>
                    <Typography>
                    <div className='containerHeaderBody'  dangerouslySetInnerHTML={{ __html:  data.contenido }}/>
                    </Typography>
                    {conf.chat===true?
                    <List>
                        {
                            Lists(chat)
                        }
                    </List>
                    :null
                    }
                    <br></br>
                </div>
                {conf.footer===true?
                    <footer className='footerContainerHeader'>
                        <div className='DivFotter'>
                            <i className='icon-positivo iconDivFotter'></i>
                            <i className='icon-neutral iconDivFotter'></i>
                            <i className='icon-negativo iconDivFotter'></i>
                        </div>   
                    </footer>
                :null
                }
                
        </div>
    )
}
ContainerHeader.defaultProps = {
     data : {
            header:{
                0:[ 
                    'ACTIVO',//text
                    true//icon
                ],
                1:[ 
                    'Servicio',//text
                    false//icon
                ],
                2:[   
                    '16/05/2019  17:45',//text
                    false//icon
                ],
                3:[      
                    'Folio: 0345',//text
                    false//icon
                ],
                4:[
                    'Mensaje',//text
                    true,//icon
                    true,
                    5
                ],
            
            table:{
                
            }
            ,
            contenido : 'Estimados vecinos/as:<br/>Nos dirigimos a ustedes con motivo de la notificación por parte de la compañía eléctrica de la próxima susti-tución de los actuales contadores por unos con discriminación horaria, electrónicos o “inteligentes” Las molestias causadas por los vecinos son un problema delicado y, a veces, difícil de solucionar. En un primer momento, es preferible intentar ponerles n de manera amigable, comunicándose con el vecino y pidiéndole que abandone el comportamiento.  '
            ,
            chat:{
                0:[
                    "asda",
                    "asdasd"
                ]
            }
        },
    }
  }
  const Lists = (chat) =>{
    var container=[];
    for(const aux in chat){
        
        container.push(<ListItem data={chat[aux]}/>)
        
    }
    return container
}
export default ContainerHeader