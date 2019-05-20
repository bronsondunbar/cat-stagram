import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListComponent from './app/components/listComponent'
import ListItem from './app/components/listItem'

export default () =>
  <Switch>
    <Route path="/" exact component={ListComponent} />
  	<Route path="/item/:id" exact component={ListItem} />
  </Switch>