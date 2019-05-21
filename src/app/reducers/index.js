import { combineReducers } from 'redux'

import GetUsers from './getUsers'
import GetItems from './getItems'
import ItemDetails from './itemDetails'

const rootReducer = combineReducers ({
	GetUsers,
	GetItems,
	ItemDetails
})

export default rootReducer