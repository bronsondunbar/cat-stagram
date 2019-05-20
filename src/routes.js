import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListItem from './app/components/listComponent'

export default () =>
  <Switch>
  	<Route path="/item" exact component={ListItem} />
  </Switch>