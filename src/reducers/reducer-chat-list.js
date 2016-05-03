import chatItemReducer from './reducer-chat-item'

const chatListReducer = (state = [], action) => {
	console.log('state in chatListReducer: ', state);
	switch(action.type) {
		case 'ADD_CHAT_ITEM':
		return [
			...state,
			chatItemReducer(state, action)
		]
		default: return state;
	}
}

export default chatListReducer


