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
import { getOverTime } from "../Api";

import MaterialTable from "material-table";


import OverTimeForm from "../Components/PopUpForm/OverTimeForm";
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

export default function OverTime() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllAdvance();
  }, []);
  const getAllAdvance = async (_id) => {
    const response = await getOverTime(_id);
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
      title: "Amount",
      field: "otAmount",
      type: "currency",
      currencySetting: {
        currencyCode: "INR",
        minimumFractionDigits: 0,
      },
    },
 
    {
      title: "date",
      field: "date",
      type:"date"
    },
    {
      title: "Comments",
      field: "comments",
    
    },
  ];

  return (
    <Paper className={classes.pageContent}>
      <Toolbar>
        <Typography variant="h3">OverTime</Typography>
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
          title=""
          editable={{
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
             fetch(`http://localhost:5000/overtime/${oldRow._id}`,{
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
          options={{ actionsColumnIndex: -1, }}
        />
      </TableContainer>
      <PopUp
        title="Over Time"
        openPopup={open}
        setOpenPopup={() => (setOpen(false), getAllAdvance())}
      >
        <OverTimeForm />
      </PopUp>
    </Paper>
  );
}

  