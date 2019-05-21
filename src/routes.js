import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DefaultPage from './app/components/defaultPage'
import ItemDetails from './app/components/itemDetails'

export default () =>
  <Switch>
    <Route path="/" exact component={DefaultPage} />
  	<Route path="/item/:id/:index" exact component={ItemDetails} />
  </Switch>