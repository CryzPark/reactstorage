import React, { useCallback, useState } from 'react';
import { Container, Link } from '@material-ui/core';
import {useDropzone} from 'react-dropzone';
import './facturas.scss'
import { makeStyles } from '@material-ui/core/styles';
import Input from '../../../Generic Components/Input/Input'
import Button from '../../../Generic Components/Button/Button' 
const useStyles = makeStyles({
    // style rule
    R: props => ({
        border: '1px solid '+ props.borderR
    }),
    A: props => ({
        border: '1px solid '+ props.borderA
    }),
    D: props => ({
        border: '.5px solid '+ props.borderD
    })
  });
const Facturas = () =>{
    const [files, setFiles] = useState([]);
    const [state, setState] = useState(true);
    const [error,setError] = useState(null);
    const {acceptedFiles, getRootProps, getInputProps,isDragReject,isDragAccept} = (useDropzone({
        accept: 'image/*',
        multiple: false,
        onDrop: acceptedFiles => {
        
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        },
        onDropAccepted: acceptedFiles =>{
            setState(false)
            setError(null)
        }
        ,
        onDropRejected: acceptedFiles =>{
            setError('archivo no valido')
        }
      }))
  
    
    const classes = useStyles({borderR:'red',borderA:'green',borderD:'grey'});
    const thumbs = files.map(file => (
        
        <div className='imgRecibosContainer'  key={file.name}>
          <div >
            <img
            className='imgRecibos'
              src={file.preview}
            />
          </div>
        </div>
      ));
    
    
      
      console.log(thumbs)
    return(
        <Container maxWidth='lg'>
            
                <div {...getRootProps({className: isDragReject===true ?classes.R+' dropzone':isDragAccept===true? classes.A + ' dropzone' : classes.D + ' dropzone'})}>
                    <input {...getInputProps()} />
                    <p>{thumbs}</p>
                    {state===true?<i className='icon-ticket Icon' />:null}
                    <p className='textFacturaAct'>Arrastra Imagen de Comprobante de Pago o buscar imagen en tu computadora</p>
                    <p>{isDragReject===true ? 'El Archivo no es compatible':null}</p>
                    <p>{error}</p>
                </div>
                <div className='comentFacturas'>
                    <Input labelInput='Agregar comentario' type='text' className=' inputS facturasInput' variant="outlined" size="small" multiline='true'/>
                </div>
                <div  className='SubmitFacturas'>
                    <Button Text='Enviar Comprobante' ClassName='FacturaButton ButtonBorderRadio'/>
                </div>
        </Container>
    )
}
export default Facturas