import {
  Paper,
  TableContainer,
  makeStyles,
  Toolbar,
  Button,
  Typography,
} from "@material-ui/core";

import PopUp from "../Components/Controls/PopUp";

import React, { useState, useEffect } from "react";
import { getBill } from "../Api";

import MaterialTable from "material-table";


import FoodBillForm from "../Components/PopUpForm/FoodBillForm";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  serchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "5px",
  },
}));

export default function FoodBill() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllAdvance();
  }, []);
  const getAllAdvance = async (_id) => {
    const response = await getBill(_id);
    console.log(response);
    setData(response.data.reverse());
    console.log(response.data);
  };

  const columns = [
    {
      title: "Name",
      field: "empName",
    },

    {
      title: "Department",
      field: "department",
      lookup: {
        tranee: "Tranee",
        idDep: "It",
        FrontEnd: "Front End",
        Backend: "Backend",
      },
    },

    {
      title: "foodAmount",
      field: "foodAmount",
      type: "currency",
      currencySetting: {
        currencyCode: "INR",
        minimumFractionDigits: 0,
      },
    },
    {
      title: "billNo",
      field: "billNo",
      // type: "currency",
      // currencySetting: {
      //   currencyCode: "INR",
      //   minimumFractionDigits: 0,
      // },
    },
    {
      title: "date",
      field: "date",
      type:"date"
    },
  ];

  return (
    <Paper className={classes.pageContent}>
      <Toolbar>
        <Typography variant="h3">Food Bill</Typography>
        <Button
          variant="outlined"
          className={classes.newButton}
          color="primary"
          onClick={() => setOpen(true)}
        >
          Add
        </Button>
      </Toolbar>

      <TableContainer component={Paper}>
        <MaterialTable
          columns={columns}
          data={data}
          editable={{
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
             fetch(`http://localhost:5000/foodbill/${oldRow._id}`,{
               method:"PATCH",
               headers:{
                 "Content-type":"application/json"
               },
               body:JSON.stringify(newRow)
             }).then(res=>res.json()).then(res=>{getAllAdvance() 
              setTimeout(() => resolve(), 500);
             })
                
              }),
          }}
          options={{ actionsColumnIndex: -1 }}
        />
      </TableContainer>
      <PopUp
        title="Food Bill"
        openPopup={open}
        setOpenPopup={() => (setOpen(false), getAllAdvance())}
      >
        <FoodBillForm />
      </PopUp>
    </Paper>
  );
}

  