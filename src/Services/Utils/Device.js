import useMediaQuery from '@material-ui/core/useMediaQuery';
export const Device = () =>{
    var tablet = useMediaQuery('(min-width:768px)');
    var laptop = useMediaQuery('(min-width:1024px)');
    var mobile = useMediaQuery('(max-width:425px)');
    var pc = useMediaQuery('(min-width:1440px)');
    var laptop2 = useMediaQuery('(min-width:1340px)')
    if(pc===true){
        tablet=false
        laptop=false
        laptop2=false
    }else if(laptop2===true){
        tablet=false
        laptop=false
    }else if(laptop===true){
        tablet=false
    }


    if(pc)return 0
    else if(laptop)return 1
    else if(tablet)return 2
    else if(mobile) return 3
    else if(laptop2) return 4
}