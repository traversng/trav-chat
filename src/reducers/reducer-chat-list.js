import Firebase from 'firebase'
import chatItemReducer from './reducer-chat-item'
import * as types from '../actions/types';
import map from 'lodash/map';

const chatListReducer = (state = [], {type, payload}) => {
	switch(type) {
		case types.RECEIVE_CHAT_ITEM:
			return [
				...map(payload, item => item),
				...state,
			];
		default:
			return state;
	}
}

export default chatListReducer;


