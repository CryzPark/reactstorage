import React from 'react';
import ItemStatus from '../../../../Components/Generic Components/ItemStatus/itemStatus'
import { Container } from '@material-ui/core';
import './Reservas.scss'
import { useSelector } from 'react-redux';
import { BorderBackground } from '../../../../Themes/CustomThemes';
const Reservas = () => {
    return(
        <Container maxWidth='md'>
            <div  style={BorderBackground} className='containerReservas'>
                {Item(useSelector(state => state.events.events))}
            </div>
        </Container>
    )
}
const conf = {
    color : new Map([
        ['SOLICITADO','#F1a856'],
        ['APROBADO','#b9d248'],
        ['FINALIZADO','#bdbdbd'],
        ['NO DISPONIBLE','#d14163']
    ]),

}

const datas = {
   0:{
    status:'NO DISPONIBLE',
    date: '2000-12-01',
    place: 'Salón de Usos Multiples',
    horario: '17:00',
    tipo: 'Reunión Familiar',
    url:'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/slideshow/_FI.jpg?1563747560'
   },
   1:{
    status:'APROBADO',
    date: '2000-12-01',
    place: 'Salón de Usos Multiples',
    horario: '17:00 a 22:00',
    tipo: 'Reunión Familiar',
    url:'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/slideshow/_FI.jpg?1563747560'
   },
   2:{
    status:'FINALIZADO',
    date: '2000-12-01',
    place: 'Salón de Usos Multiples',
    horario: '17:00 a 22:00',
    tipo: 'Reunión Familiar',
    url:'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/slideshow/_FI.jpg?1563747560'
   },
   3:{
    status:'SOLICITADO',
    date: '2000-12-01',
    place: 'Salón de Usos Multiples',
    horario: '17:00 a 22:00',
    tipo: 'Reunión Familiar',
    url:'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/slideshow/_FI.jpg?1563747560'
   },
   4:{
    status:'FINALIZADO',
    date: '2000-12-01',
    place: 'Salón de Usos Multiples',
    horario: '17:00 a 22:00',
    tipo: 'Reunión Familiar',
    url:'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/slideshow/_FI.jpg?1563747560'
   },
   5:{
    status:'FINALIZADO',
    date: '2000-12-01',
    place: 'Salón de Usos Multiples',
    horario: '17:00 a 22:00',
    tipo: 'Reunión Familiar',
    url:'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/slideshow/_FI.jpg?1563747560'
   }

}

const Item = (data) =>{
    var container=[];
    for(const aux in data){
        
        container.push(<ItemStatus data={data[aux]} conf={conf}/>)
        
    }
    return container
}
export default Reservas