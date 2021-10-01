import React,{useState} from 'react'
import {Tabs,Tab,AppBar} from "@material-ui/core"
import Advance from '../../Tables/Advance'
import Penalty from '../../Tables/Penalty'
import FoodBill from '../../Tables/FoodBill'
import OverTime from '../../Tables/OverTime'
import Salary_Master from '../../Tables/Salary_Master'

export default function Tabss() {
    const [value,setValue]=useState(0)
    const handelTabs=(e,val)=>{
        // console.warn(val)
        setValue(val)
    }
    return (
        <div>
       <AppBar position="static">
           <Tabs value={value} onChange={handelTabs}>
               <Tab  label="Advance"/>
               <Tab label="Penalty"/>
               <Tab label="FoodBill"/>
               <Tab label="OverTime"/>
               <Tab label="SalarySlip"/>

           </Tabs>
       </AppBar>
     <TabPanel value={value} index={0}><Advance/></TabPanel>
     <TabPanel value={value} index={1}><Penalty/></TabPanel>
      <TabPanel value={value} index={2}><FoodBill/></TabPanel>
      <TabPanel value={value} index={3}><OverTime/></TabPanel>
      <TabPanel value={value} index={4}><Salary_Master/></TabPanel>

       </div>
    )
}

function TabPanel(props){
const {children,value,index}=props;
    return(
        <div>
{
value===index&&(children)
}
        </div>
    )
}