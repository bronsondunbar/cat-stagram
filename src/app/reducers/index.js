import { combineReducers } from 'redux'

import GetUsers from './getUsers'
import GetItems from './getItems'

const rootReducer = combineReducers ({
	GetUsers,
	GetItems
})

export default rootReducer