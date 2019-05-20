import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createHistory from 'history/createHashHistory'

import configureStore from './store'
import * as serviceWorker from './serviceWorker'

import App from './app'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render(
	<Fragment>
		<Provider store={store}>
			<Router>
		  	<App />
			</Router>
		</Provider>
	</Fragment>,
	document.getElementById('root')
)
serviceWorker.unregister();
