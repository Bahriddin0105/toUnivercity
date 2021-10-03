import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Test from './components/main-comp/Test';
import Natija from './js/Natija'
// import Natija from './components/main-comp/Natija';
export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Dashboard/>
          </Route>
          <Route exact path='/test'>
        <Test/>
          </Route>
          <Route exact path='/natija'>
        <Natija/>
          </Route>
        </Switch>
        
        </BrowserRouter>
    )
  }
}
