import { Grid, TextField} from "@material-ui/core";
import React from "react";
import Select from "../Controls/Select";
import Button from "../Controls/Button";
import {addBill} from "../../Api"
import { department } from "../TablesHeader";
import { useForm } from "react-hook-form";
export default function FoodBillForm() {
    const { register, handleSubmit,reset  } = useForm();
    const onSubmit = data =>{
      addBill(data)
     
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
        <TextField variant="outlined" name="billNo" label="Bill No" {...register("billNo", { required: true })} />
      </Grid>
      <Grid item xs={3}>
        <TextField variant="outlined" name="foodAmount" label="Food Amount" {...register("foodAmount", { required: true })} />
      </Grid>
    

     <Grid item xs={3}>
      <TextField variant="outlined" name="date" type="date" {...register("date", { required: true })} />
     
      </Grid>
  
    </Grid>
    <Grid container direction="row-reverse"> <Button text="Submit" type="submit"/></Grid>
  
    </form>
  );
}
