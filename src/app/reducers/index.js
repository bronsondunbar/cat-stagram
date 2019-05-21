import { combineReducers } from 'redux'

import GetUsers from './getUsers'
import GetItems from './getItems'
import GetItemDetails from './GetItemDetails'

const rootReducer = combineReducers ({
	GetUsers,
	GetItems,
	GetItemDetails
})

export default rootReducer