import {
    Paper,
    Table,
    TableContainer,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    makeStyles,
    Toolbar,
    TextField,
    Button,
    InputAdornment,
   
  } from "@material-ui/core";
  import PopUp from "../Components/Controls/PopUp"
  import { Search } from "@material-ui/icons";
  import React, { useState, useEffect } from "react";
  import { getSal} from "../Api";
  import { salaryHead } from "../Components/TablesHeader";
  import SalaryForm from "../Components/PopUpForm/SalaryForm";
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
  
  export default function Salary_Master() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [open,setOpen]=useState(false)

    useEffect(() => {
      getAllSalary();
    },[]);


    const getAllSalary = async (_id) => {
      const response = await getSal(_id);
      console.log(response);
      setData(response.data);
    };
  
    return (
      <Paper className={classes.pageContent}>
        <Toolbar>
          <TextField variant="outlined" className={classes.serchInput}  InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}/>
          <Button
            variant="outlined"
            className={classes.newButton}
           color="primary"
           onClick={()=>setOpen(true)}
          >
            Add
          </Button>
        </Toolbar>
  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {salaryHead.map((adv) => (
                  <TableCell key={adv.id}>{adv.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {
                  data.map((adv,index) => (
                <TableRow key={index}>
                  <TableCell>{adv.employeeName}</TableCell>
                  <TableCell>{adv.department}</TableCell>
                  <TableCell>{adv.date}</TableCell>
                  <TableCell>₹{adv.salary}</TableCell>
                  <TableCell>₹{adv.actualSalary}</TableCell>
                </TableRow>
              ))
              } */}
              <TableRow>
                  
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <PopUp title="Salary Slip" openPopup={open} setOpenPopup={()=>setOpen(false)}><SalaryForm/></PopUp>
      </Paper>
    );
  }
  