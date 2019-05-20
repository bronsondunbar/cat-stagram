export default function (state = '', action) {
	switch (action.type) {

		case 'GET_ITEMS':
			return action.payload

		default:
			return null

	}

	return state
}