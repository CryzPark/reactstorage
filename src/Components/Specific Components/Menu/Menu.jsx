import React, { Fragment } from 'react';
import { AppBar,Divider, Grid } from '@material-ui/core';
import './menu.scss'
import GenericButton from '../../Generic Components/Button/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';


const Menu = (props) =>{
    
   const conf = props.conf;
    return(
    <AppBar position="static" className='HeaderTool'>
            <Grid container justify="center" alignItems="stretch">
                <Grid item xs={conf.withSpace}>
                </Grid>
                { MenuButtons(conf)}

                <Grid item xs={conf.withSpace}>
                    
                </Grid>
            </Grid>
    </AppBar>
    )
}
const MenuButtons = (conf) =>{
    const pc = useMediaQuery('(max-width:425px)');
    const history = useHistory();
    var container=[];
    var url =window.location.pathname.split('/');
    var newUrl="";
    for(const aux in url){
        if(isNaN(url[aux])){
            newUrl+="/"
            newUrl+=url[aux]
        }
    }
    for(const aux in conf.button){
        
        container.push(

            <Fragment>
            {conf.divider===true?<Divider orientation="vertical" flexItem />:null}
            <Grid item xs={conf.buttonSize}>
                {conf.className==='submenu'?
                <GenericButton ClassName={newUrl===conf.button[aux].path || newUrl === conf.button[aux].path2 ?  conf.button[aux].className + ' SubButtonMenu SubSelectMenu':conf.button[aux].className + ' SubButtonMenu'} OnClick={ () => history.push(conf.button[aux].path)} Text={conf.button[aux].text} icon={pc===true?null: conf.button[aux].icon}/>  
                :
                    <GenericButton ClassName={newUrl===conf.button[aux].path || newUrl === conf.button[aux].path2 ?  conf.button[aux].className + ' ButtonMenu SelectMenu':conf.button[aux].className + ' ButtonMenu'} OnClick={ () => history.push(conf.button[aux].path)} Text={conf.button[aux].text} icon={pc===true?null: conf.button[aux].icon} />  
                }  
            </Grid>
            {conf.divider===true?<Divider orientation="vertical" flexItem />:null}
            </Fragment>
        
        )
        
    }
    return container
}
export default Menu