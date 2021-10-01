import { TextField } from '@material-ui/core';
import React from 'react'

export default function Input(props) {
    const {name,label,value,type,helperText,onChange,error=null,...other}=props;
    return (
       <TextField
           variant="outlined"
           label={label}
           name={name}
           type={type}
           value={value}
           onChange={onChange}
           {...other}
           error={error}
         helperText={helperText}
        // {...(error &&{error:true,helperText:{helperText}})}
       />
    )
}
