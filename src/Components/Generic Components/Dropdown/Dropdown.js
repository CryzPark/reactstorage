import React from 'react';
import { Select } from '@material-ui/core';

const Dropdown = (props) =>{
    const Data = props.data;
    const ClassName = props.ClassName;
    const Information=[];
    const variant = props.variant;
    const defaults = props.default;
    const name = props.name;
    const style = props.style;
    for(const  prop in Data){
        Information[prop] = Object.values(Data[prop]);
      }
    return(
        <Select style={style} name={name} variant={variant} className={ClassName} native defaultValue={defaults}>
            {Information.map((item)=>(
                <option value={item}>{item}</option>
              ))}
        </Select>
    )
  
}
export default Dropdown