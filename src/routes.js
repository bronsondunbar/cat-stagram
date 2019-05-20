import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListComponent from './app/components/listComponent'
import ListItem from './app/components/listItem'

export default ({ childProps }) =>
  <Switch>
    <Route path="/" component={ListComponent} props={childProps} />
  	<Route path="/item" component={ListItem} />
  </Switch>