import React, { Fragment, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment'
import '@fullcalendar/core/main.css';
import Cookies from 'js-cookie'
import '@fullcalendar/daygrid/main.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import interactionPlugin from "@fullcalendar/interaction";
import {CALENDARDATE} from '../../../Services/Utils/Constants'

var today = moment().format('YYYY-MM-DD');
const lang = window.navigator.language
const calendarComponentRef = React.createRef();
localStorage.setItem(CALENDARDATE,today);
Cookies.set('Date',today,{ expires: 7 })
const Calendar = (props) =>{
    const className = props.className
    const funtion = props.dateClick
    const events = props.events
    const pc = useMediaQuery('(min-width:900px)');
    var abr 
    if(pc === true){
      abr = 'long'
    }else{
      abr='short'
    }
    return(
    <Fragment>
    <FullCalendar 
            dateClick={function(info) {
              var date = info.date
              funtion(info.dateStr,date);
              }}
            
            height='parent'
            fixedWeekCount={false}
            timeZone= 'local'
            locale={lang}
            columnHeaderFormat={{ weekday: abr }}
            defaultDate = {today}
            ref={calendarComponentRef}
            firstDay={7}
            weekends={true}
            defaultView="dayGridMonth"
            plugins={[ dayGridPlugin,interactionPlugin ]}
            header={{
            left: "",
            center: "",
            right: ''
            }}
            dayRender= {function (info) {
              info.el.style.backgroundColor =   'white'; 
              if(moment(info.date).format('YYYY-MM-DD') <=moment().format('YYYY-MM-DD'))
                info.el.style.backgroundColor = '#f5f5f5';          
             }
            }
            events={events} 
    />
        </Fragment>
    )
}
export const Next = (date) => {
    let calendarApi = calendarComponentRef.current.getApi();  
    date =moment(date).add(1, 'month').format('YYYY-MM-DD')
    calendarApi.gotoDate(date); 
    localStorage.setItem(CALENDARDATE,date)
    
  };
  export const Prev = (date) => {
    let calendarApi = calendarComponentRef.current.getApi();  
    date =moment(date).subtract(1, 'month').format('YYYY-MM-DD')
    calendarApi.gotoDate(date); 
    localStorage.setItem(CALENDARDATE,date) 
  };     
export default Calendar
