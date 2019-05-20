import { combineReducers } from 'redux'

import GetUsers from './getUsers'
import GetItems from './getItems'
import GetItem from './getItem'

const rootReducer = combineReducers ({
	GetUsers,
	GetItems,
	GetItem
})

export default rootReducer