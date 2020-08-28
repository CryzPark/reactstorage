import React,{Fragment} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import './table.css'
import {ICON} from '../../../Services/Utils/Constants'
import TablePagination from '@material-ui/core/TablePagination';
import { TableFooter, Typography } from '@material-ui/core';


function FormatString(aux) {
  aux= aux.toString();
  aux = aux.replace('_',' ');
  var splitStr = aux.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  } 
  return splitStr.join(' '); 
}
function FormatTrxt(aux) {
  if(!isNaN(aux)){
    return '$ '+aux;
  }else{
    return aux;
  }
}

const useStyles = makeStyles({
  // style rule
  icon: props => ({
    color: props.color,
    fill: props.color
  }),
});
export default function DataTable(props) {
  
  const className = props.className;
  var data = props.data;
  const c = Object.values(data);
  var cells=[['123','cotizar','323'],['323','423','423'],];
  for(const  prop in c){
    cells[prop] = Object.values(c[prop]);
  }
  const rows = Object.keys(data[0]);
  const conf = props.conf;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(conf.rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const style=(n) => {
   return {color : n}
  };
  const color = useStyles({color:''})
  return (
    <Fragment>
    <TableContainer component={Paper} className={className}>
      <Table stickyHeader sticky='true' aria-label="simple table">
        <TableHead className='cellHeader'>
          <TableRow>
            
            {
              rows.map((item)=>(
                <TableCell><div className='cellrow'>{FormatString(item)}</div></TableCell>
              ))
            }
            
          </TableRow>
        </TableHead>
        <TableBody>

          {(rowsPerPage > 0
            ? cells.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : cells
          ).map((cell) => (
            <TableRow className='cellText'>
                {cell.map((item)=>(
                    isInArray(item,conf.icons) ?
                        
                        <TableCell style={style((ICON.get(item))[0])}>
                          <i className={ ' iconTable '+ (ICON.get(item))[1]} />
                          <div className='iconText'>{conf.iconText===true?" "+item : ''}</div>
                          </TableCell>
                    :
                        <TableCell><div className='tableText'>{FormatTrxt(item)}</div></TableCell>
                ))}
            </TableRow>
          ))}
         
        </TableBody>
        <TableFooter>
          {data.length <= rowsPerPage?null :
          <TablePagination
          rowsPerPageOptions={[conf.rowsPerPage, conf.rowsPerPage*2, conf.rowsPerPage*3, { label: 'All', value: -1 }]}         
          count={cells.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage='Filas'
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
          />
          }
        </TableFooter>

          
      </Table>
    </TableContainer>
    
    </Fragment>
  );
}
function isInArray(value, array) {
 if(array === undefined){
   return false
 }
 return array.includes(value);
  
}
DataTable.defaultProps = {
  conf : {
    rows : 3,
    icon : {
      Money: '> '
    }
  }
}

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};