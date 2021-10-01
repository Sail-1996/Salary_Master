import React from "react";
import { FormControl,FormHelperText,MenuItem, InputLabel,Select as MuiSelect } from "@material-ui/core";

export default function Select(props) {
  const { name, label, margin,value, onChange,helperText,options,error=null,...other } = props;
  return <FormControl variant="outlined"
     {...(error &&{error:true})} fullWidth
  >
      <InputLabel >
          {label}
      </InputLabel>
      <MuiSelect 
      label={label}
    
      name={name}
      value={value}
      onChange={onChange}

      {...other}
      >
<MenuItem value=""></MenuItem>
{
    options.map(
        (item)=>(<MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>)
    )
}
      </MuiSelect>
      {error && <FormHelperText> please select the id</FormHelperText> }
  </FormControl>;
}
