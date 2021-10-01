import { Grid, TextField} from "@material-ui/core";
import React from "react";
import Select from "../Controls/Select";
import Button from "../Controls/Button";

import {addAdvance} from "../../Api"
import { department } from "../TablesHeader";
import { useForm } from "react-hook-form";
export default function AdvanceForm(props) {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
      addAdvance(data);
      console.log(data)
   
      reset()

    };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
      
    <Grid container spacing={1} >
      <Grid item xs={3}>
     
      <TextField name="empName" variant="outlined" label="Name" {...register("empName", { required: true })} />
      
      </Grid>
      <Grid item xs={3}>
        <Select name="department" label="Department" options={department} {...register("department", { required: true })} />
      </Grid>
      <Grid item xs={3}>
        <TextField name="advanceAmount" variant="outlined" label="Amount" {...register("advanceAmount", { required: true })} />
      </Grid>
      <Grid item xs={3}>
      <TextField name="date" variant="outlined" type="date" {...register("date", { required: true })} />
     
      </Grid>
      <Grid item xs={6}>
       
       <TextField name="comments" variant="outlined" label="Description" {...register("comments", { required: true })} />
     </Grid>
  
    </Grid>
    <Grid container direction="row-reverse"><Button type="submit" text="Submit" /></Grid>
  
    </form>
  );
}
