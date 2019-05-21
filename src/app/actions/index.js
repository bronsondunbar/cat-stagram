export function getUsers (data) {
	return {
		type: 'GET_USERS',
		payload: data
	}
}

export function getItems (data) {
	return {
		type: 'GET_ITEMS',
		payload: data
	}
}

export function getItemDetails (data) {
	if (data !== undefined) {
		return {
			type: 'GET_ITEM_DETAILS',
			payload: data
		}
	} else {
		return {
			type: 'GET_ITEM_DETAILS',
			payload: ''
		}
	}
}