import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListComponent from './app/components/listComponent'
import ListItem from './app/components/listItem'

export default () =>
  <Switch>
    <Route path="/" component={ListComponent} />
  	<Route path="/item" component={ListItem} />
  </Switch>