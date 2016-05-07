import Constants from '../constants'
import initialState from '../initialState'

const authReducer = (state, action) => {
	console.log('authReducer called state: ', state + ' action: ', action);
	switch(action.type) {
		case Constants.ATTEMPTING_LOGIN:
		console.log('Attempting??');
		return {
			status: Constants.AWAITING_AUTH_RESPONSE,
			username: 'guest',
			uid: null
		};
		case Constants.LOG_OUT:
		console.log('in LOG_OUT');
		return {
			status: Constants.ANONYMOUS,
			username: 'guest',
			uid: null
		};
		case Constants.LOGIN_USER:
		console.log('in LOGIN_USER');
		return {
			status: Constants.LOGGED_IN,
			username: action.username,
			uid: action.uid
		}
		default: return state || initialState;
	}
}

export default authReducer