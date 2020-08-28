
export const EventFilter=(event,carousel,state)=> {
    var events=[]
    for(var aux in event){
        if(carousel[state].tittle === event[aux].place){
            events.push(event[aux])
        }
    }
    return(events)
    
}