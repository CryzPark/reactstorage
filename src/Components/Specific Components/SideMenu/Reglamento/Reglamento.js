import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
const Reglamento =()=>
{
    return (
        <div className='sizepdf' style={{overflow:'scroll'}}>
            <PDFReader url={"https://arxiv.org/pdf/quant-ph/0410100.pdf"} scale={1.2} />
        </div>
        
    )
}
export default Reglamento