import React, {useState } from 'react';
import './header.scss'
import { Toolbar, AppBar, Hidden, IconButton, Drawer} from '@material-ui/core';
//import { createMuiTheme,ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from './Dropdown'
import {sideList} from'./Drawer'
import theme from './../../../Themes/Themes'
/*const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#388888!important',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#500550',
            dark: '#ba000d',
            contrastText: '#000',
          },
    },
  });*/
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));
  const Colors = makeStyles({
    // style rule
    header: props => ({
      backgroundColor: props.backgroundColor,
    })
  });
function HeaderPrincipal(props) {
    const color=props.color
    const classes = useStyles();
    const [state, setState] = useState(false);
    const toggleDrawer = ( open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }   
        setState(open);
      };
    const Style = Colors({backgroundColor:color});
    return(
        
        //<ThemeProvider theme={theme}>   
        <div className={classes.root}>
            <AppBar className={Style.header +' HeaderDash'} position='static' color='primary' >
                <Toolbar >     
                    <Hidden mdUp>                           
                        <IconButton edge='start' className='HeaderMenu' onClick={toggleDrawer(true)}>
                            <MenuIcon className='MenuIcon' />
                        </IconButton>    
                        <Drawer  open={state} onClose={toggleDrawer(false)}>
                            {sideList()}
                        </Drawer>                       
                    </Hidden>          
                    <img alt='logo' className='HeaderImg' src='https://vivecommunity.com/wp-content/uploads/2019/09/COMMU-LOGO-03-p-500-5.png'/>                         
                        <div className='DropdownContainer'>
                            <Dropdown/>
                        </div>
                                     
                </Toolbar>
            </AppBar>  
        </div>
        //</ThemeProvider>       
    )
}
export default HeaderPrincipal