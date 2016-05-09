import Firebase from 'firebase'
import chatItemReducer from './reducer-chat-item'
import * as types from '../actions/types';


const chatListReducer = (state = [], {type, payload}) => {
	switch(action.type) {
		case types.ADD_CHAT_ITEM:
			return [
				...payload,
				...state,
			];
		default:
			return state;
	}
}

export default chatListReducer;


