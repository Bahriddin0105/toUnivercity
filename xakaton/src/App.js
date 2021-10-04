import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import HomePage from './components/home-page/home-page';
import Test from './components/main-comp/Test';
import Natija from './components/result/Natija'
export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route exact path='/login'>
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
