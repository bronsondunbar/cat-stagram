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

export function itemDetails (data) {
	return {
		type: 'ITEM_DETAILS',
		payload: data
	}
}