import Firebase from 'firebase'
import * as types from '../actions/types';
import map from 'lodash/map';

const chatListReducer = (state = [], {type, payload}) => {
	console.log('payload in chatListReducer: ', payload)
	switch(type) {
		case types.RECEIVE_FIREBASE_LIST:
			return [
				...map(payload, item => item),
				state // Spreading over state was causing duplications...
			];
		default:
			return state;
	}
}

export default chatListReducer;


