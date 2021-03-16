import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Details from '../pages/Details'

const Routes = () => (
  <BrowserRouter basename="hotels">
    <Switch>
      <Route exact path="/details" component={Details}/>
    </Switch>
  </BrowserRouter>
)

export default Routes