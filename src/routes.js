import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DefaultPage from './app/components/defaultPage'
import ListItem from './app/components/listItem'

export default () =>
  <Switch>
    <Route path="/" exact component={DefaultPage} />
  	<Route path="/item/:id" exact component={ListItem} />
  </Switch>