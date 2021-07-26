import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./views/Home";
import Products from "./views/Products";
import Customers from "./views/Customers";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/products" exact component={Products}></Route>
      <Route path="/customers" exact component={Customers}></Route>
    </Switch>
  )
}