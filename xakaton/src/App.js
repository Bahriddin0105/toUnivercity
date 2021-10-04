import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import HomePage from './components/home-page/home-page';
import Test from './components/main-comp/Test';
<<<<<<< HEAD
import Natija from './components/result/Natija'
=======
import Tests from './js/Tests'
import Natija from './js/Natija'
// import Natija from './components/main-comp/Natija';
>>>>>>> ab821608ef7fbc5d7ab8a350ace2e496d0fea209
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
          <Route exact path='/tests'>
        <Tests/>
          </Route>
          <Route exact path='/natija'>
        <Natija/>
          </Route>
        </Switch>

        </BrowserRouter>
    )
  }
}
