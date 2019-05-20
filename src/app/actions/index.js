
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