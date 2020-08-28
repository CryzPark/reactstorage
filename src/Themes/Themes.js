import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        type:'light',
        background:{
                    light:{ backgroundColor:'#f7f9fb'},
                    main:{ backgroundColor:'#f7f9fb'},
                    dark:{ backgroundColor:'#f7f9fb'}  
        },
        primary: { 
          main: '#ffffff',
        },
        secondary: { 
          main: '#69BE28',
        },
        main: {
            light:{ backgroundColor:'#f7f9fb'},
            main:{ backgroundColor:'#f7f9fb'},
            dark:{ backgroundColor:'#f7f9fb'}  
        },
        borderButton: { 
            border: '1px solid #cfcfcf',
            backgroundColor: '#fffff', 
            color: '#8c60a1',
        },
        borderInput: { 
            border: '#71706f',
        },
        linkText: {
            color: '#A089a4',
        },
        header:{
            backgroundColor: '#52245f'
        },
        MenuHeader:{
            backgroundColor:'#626367'
        },
        MenuHeader2:{
            backgroundColor:'#f1a856'
        },
    },
});