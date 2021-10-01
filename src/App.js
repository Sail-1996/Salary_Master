import React from "react";
import Penalty from "./Tables/Penalty";
import Advance from "./Tables/Advance";
import Salary from "./Tables/Salary_Master"
import FoodBill from "./Tables/FoodBill"
import OverTime  from "./Tables/OverTime";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import Tabs from "./Components/Navbar/Tabs";

export default function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Switch>
  
      
        <Route exact path="/" component={Tabs} />
       
      </Switch>
    </BrowserRouter>
  );
}
