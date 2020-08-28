import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Image from '../../Generic Components/Image/Image'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './carousel.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Device } from '../../../Services/Utils/Device';
import { BackgroundWhite } from '../../../Themes/CustomThemes';
import { makeStyles } from '@material-ui/core';
import { secondFondo } from '../../../Themes/ColorsThemes';
const Colors = makeStyles({
    ButtonStyle: props => ({
      backgroundColor: secondFondo,
    }),
  });
const size = (device)=>{
    switch (device) {
        case 0:
            return [53,80]
        case 1:
            return [50,80]
        case 2:
            return [56,80]
        case 3: 
            return [70,80]
        case 4: 
            return [54,80]
        default:
            return[0,0]
            break;
    }
}
const Carousel =(props)=>{
    const Button = Colors();
    var h
    var w
    var aux = size(Device())
    h=aux[0]
    w=aux[1]
    const conf = props.conf;
    const data = props.data;
    const onClick = props.onClick;
    const value = props.value;
    const orientation =props.orientation
    return ( 
          <CarouselProvider
            className= {Button.ButtonStyle+' carousel'}
            naturalSlideWidth={w}
            naturalSlideHeight={h}
            totalSlides={conf.totalSlider}
            orientation={orientation}
            visibleSlides={conf.visibleSlides}>
            {Device()===3?null:
                <ButtonBack  className={Button.ButtonStyle+' ButtonCarousel'}><ExpandLessIcon fontSize='default'/></ButtonBack>
            }
              
            <Slider>
                {sliders(data,onClick,value)}
            </Slider>
            {Device()===3?null:
                <ButtonNext className={Button.ButtonStyle+' ButtonCarousel'}><ExpandMoreIcon fontSize='default'/></ButtonNext>
            }
            
          </CarouselProvider>
      );
}
    
    const sliders = (data,onClick,value) => {
        var container=[];
        
  
        for(const aux in data){

            
            container.push(<Slide className={value===aux?'slideClick':'slide'} index={aux}><Image value={aux} onClick={onClick} url={data[aux].url} data={data[aux]}/></Slide>)
        }
        return(container)
    }
   export default Carousel