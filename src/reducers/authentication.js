const authReducer = (state, action) => {
	switch(action.type) {
		case 'ATTEMPTING_LOGIN':
		return {
			status: 'AWAITING_AUTH_RESPONSE',
			username: 'guest',
			uid: null
		};
		case 'LOGGED_OUT':
		return {
			status: 'ANONYMOUS',
			username: 'guest',
			uid: null
		};
		case 'AUTHENTICATED_USER':
		return {
			status: 'LOGGED_IN',
			username: action.username,
			uid: action.uid
		}
		default: return state
	}
}

export default authReducer