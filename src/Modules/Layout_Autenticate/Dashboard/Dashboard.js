import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '../../../Components/Generic Components/Table/Table'
import Header from '../../../Components/Generic Components/Header/GenericHeader'
import theme from '../../../Themes/Themes'
import { Grid, Container,makeStyles } from '@material-ui/core';
import GenericButton from '../../../Components/Generic Components/Button/Button'
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useDispatch, useSelector } from 'react-redux';
import {dataTable} from '../../../Data/actions/dataTable'
import Dropdown from '../../../Components/Generic Components/Dropdown/Dropdown'
import {Secundario,Favor,Pendiente,Vencido} from '../../../Services/Utils/Colors'
import {ICON} from '../../../Services/Utils/Constants'
import {Device} from '../../../Services/Utils/Device'
import { DashBoardBottons, text, textSecundary, BorderBackground, BackGroundTap, border, ColorWhite,BackgroundWhite, styles } from '../../../Themes/CustomThemes';
import { secondFondo, borderColor } from '../../../Themes/ColorsThemes';
const Colors = makeStyles({
  // style rule
  Text: props => ({
    color: Secundario,
  }),
  Header: props => ({
    backgroundColor: Favor,
  }),
  Header2: props => ({
    backgroundColor: Pendiente,
  }),
  Header3: props => ({
    backgroundColor: Vencido,
  }),
  Favor: props => ({
    color: Favor,
  }),
  Pendiente: props => ({
    color: Pendiente,
  }),
  Vencido: props => ({
    color: Vencido,
  })
});
const domicilio = {
  0:'Diamantina #14',
  1:'Diamantina #17',
}
const total = (aux) =>{
  var value=0;
  aux.forEach(elements =>value+=elements.cargo)
  return value;
}
const customTapPanel=(props,value,drop=true,label,icon,icontext,color)=>(
  <div>
      <Typography style={text} className={'txtittle'}>{props}</Typography>
      {drop===true?
      <Dropdown data={domicilio}  variant='outlined' ClassName='contentDropdown'/>
      :
      <Typography style={textSecundary} className='txt' >{label}</Typography>
      
      }
      
      <br></br>
      <Typography style={textSecundary} className='txt textMoney' >${value}</Typography>
      {Device()===3?null:
        <span className={color+' IconTap'}>
          <i className={icon}></i>
          <p className='IconTapText'>{icontext}</p>
        </span>
      }
      
      
  </div>
)


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className='ContainerTapPanel'
      style={BackgroundWhite}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {

  const dispach = useDispatch();
  
  const dt =()=>dispach(dataTable())

  

  useEffect(()=>{
     dt();
  },[]);

  var datatable = useSelector(state => state.dataTable.MiSaldo)

  const [value, setValue] = React.useState(0);

  console.log(datatable)

  const conf = {
    rowsPerPage : 3,
    icons:['pago','abono']
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const header = Colors();
  return (
    <Container className='containerTaps' maxWidth='md'>
        <br/>
        <br/>  
    <div >
      <AppBar style={BackGroundTap} className='appBarTap'  position="static">
        <Tabs  indicatorColor='primary' className='tabsContainer' value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={BorderBackground} className='borderTap' label={customTapPanel('Mi Saldo',total(dataS),true,'',ICON.get('FAVOR')[1],'A Favor',Colors().Favor)} {...a11yProps(0)} />
          <Tab style={BorderBackground} className='borderTap' label={customTapPanel('Saldo General',total(dataS),false,'Residencial EC',ICON.get('pago')[1],'Pago',Colors().Pendiente)} {...a11yProps(1)} />
          <Tab style={BorderBackground} className='borderTap' label={customTapPanel('Morosidad General',total(dataM),false,'Residencial EC',ICON.get('vencidos')[1],'Vencidos',Colors().Vencido)} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      {//datatable.length !== 0 ? 
      <div style={styles(borderColor,null,null)}>
      <TabPanel value={value} index={0}>
          <br/>
            <Header className={header.Header+' HeaderDash'}  textPrincipal='Mi Saldo' content={ 
              Device()===3
              ?
                <span style={styles(null,secondFondo,null)} className='headerIconTap'>
                  <p className='FloatLeft headerIconTapP'>${total(dataS)}</p>
                  <i className={ICON.get('FAVOR')[1]}></i>
                </span>
              :
              <span style={styles(null,secondFondo,null)} className='headerIconTap'>
                <p className='headerIconTapP'>${total(dataS)}</p>
              </span>
              }/>
          <br/>
          <Table className='ButtonData' data={dataS /*datatable[0].data*/} conf={conf}/>
          <br/>
          <Grid container>
              <Grid item xs={4}>

                  <Container>
                     <GenericButton icon={<PaymentIcon/>} Style={styles(borderColor,Secundario,secondFondo)} Text='Pago con Tarjeta' ClassName='SubmitLogin ButtonDashboard' />
                  </Container>
                
              </Grid>
              <Grid item xs={4}>

                    <Container>
                        <GenericButton  Style={styles(borderColor,Secundario,secondFondo)} Text='*** Referencia Bancaria' ClassName='SubmitLogin ButtonDashboard'/>
                    </Container>

              </Grid>
              <Grid item xs={4}>

                    <Container>
                        <GenericButton icon={<AttachMoneyIcon/>} Style={styles(borderColor,Secundario,secondFondo)}  Text='Pago en Efectivo' ClassName='SubmitLogin ButtonDashboard'/>
                    </Container>  
              
              </Grid>
          </Grid>
          <br/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <br/>
            <Header className={header.Header2+' HeaderDash'}  textPrincipal='Saldo General' content={ 
              Device()===3
              ?
                <span style={styles(null,secondFondo,null)} className='headerIconTap'>
                   <p className='FloatLeft headerIconTapP'>${total(dataS)}</p>
                  <i className={ICON.get('pago')[1]}></i>
                </span>
              :
              <span style={styles(null,secondFondo,null)} className='headerIconTap'>
                <p className='headerIconTapP'>${total(dataS)}</p>
              </span>


      }/>
          <br/>
        <Table conf={conf} className='Data' data={dataS}/>
        
      </TabPanel>
      <TabPanel  value={value} index={2}>
          <br/>
            <Header className={header.Header3+' HeaderDash'}  textPrincipal='Mi Saldo' content={ 
              Device()===3
              ?
                <span style={styles(null,secondFondo,null)} className='headerIconTap'>
                   <p className='FloatLeft headerIconTapP'>${total(dataM)}</p>
                  <i className={ICON.get('vencidos')[1]}></i>
                </span>
              :
              <span style={styles(null,secondFondo,null)} className='headerIconTap'>
                <p className='headerIconTapP'>${total(dataM)}</p>
              </span>
      }/>
          <br/>
        <Table conf={conf} className='Data' data={dataM}/>
      </TabPanel>
      </div>
      /*: null*/}
    </div>
    </Container>
  );
}
const dataM=[
  {
    "Vivienda": "Calle Vinicio 26",
    "cargo": -750
  },
  {
    "Vivienda": "Calle Vinicio 26",
    "cargo": -750
  },
  {
    "Vivienda": "Calle Vinicio 26",
    "cargo": -900
  },{
    "Vivienda": "Calle Vinicio 26",
    "cargo": -900
  }
]
const dataS=[{fecha: "2019-06-06T00:00:00", tipo: "abono", concepto: "MANTENI AREAS  VERDES", cargo: 750},
{fecha: "2019-06-14T00:00:00", tipo: "pago", concepto: "ABONO MARBETE SEMESTRAL", cargo: 750},
{fecha: "2019-06-26T00:00:00", tipo: "abono", concepto:'ABONO MARBETE SEMESTRAL',cargo: 750},
{fecha: "2019-06-26T00:00:00", tipo: "abono", concepto:'ABONO MARBETE SEMESTRAL',cargo: 750} ]