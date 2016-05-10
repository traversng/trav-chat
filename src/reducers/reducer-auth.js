import Constants from '../constants'
import * as types from '../actions/types';

const authReducer = (state = {}, {type, error, payload}) => {
	switch (type) {
		case types.LOGIN:
			return state;
		case types.LOGIN_COMPLETE:
			return {
				...state,
				...payload
			};
		default:
			return state;	
	}
}

export default authReducer