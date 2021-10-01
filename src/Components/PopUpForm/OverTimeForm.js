import { Grid, TextField} from "@material-ui/core";
import React from "react";
import Select from "../Controls/Select";
import Button from "../Controls/Button";

import { department } from "../TablesHeader";
import { useForm } from "react-hook-form";
import { addOvertime } from "../../Api";
export default function OverTimeForm() {
    const { register, handleSubmit,reset    } = useForm();
    const onSubmit = data =>{
      addOvertime(data)
      console.log(data)
      reset()
    };
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
      
    <Grid container spacing={2} >
      <Grid item xs={3}>
     
      <TextField variant="outlined" name="empName" label="Name" {...register("empName", { required: true })} />
      
      </Grid>
      <Grid item xs={3}>
        <Select name="department" label="Department" options={department} {...register("department", { required: true })} />
      </Grid>
      <Grid item xs={3}>
        <TextField variant="outlined" name="otAmount" label="Amount" {...register("otAmount", { required: true })} />
      </Grid>
      <Grid item xs={3}>
      <TextField variant="outlined" name="date" type="date" {...register("date", { required: true })} />
     
      </Grid>
      <Grid item xs={6}>
       
       <TextField variant="outlined" name="comments" label="Description" {...register("comments", { required: true })} />
     </Grid>
  
    </Grid>
    <Grid container direction="row-reverse"><Button text="Add" type="submit"/></Grid>
  
    </form>
  );
}
