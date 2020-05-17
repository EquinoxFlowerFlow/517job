import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, Reg, Home } from './assembly'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/reg" component={ Reg } />
          <Route path="/home" component={ Home } />
        </Switch>
      </BrowserRouter>
    )
  }
}
