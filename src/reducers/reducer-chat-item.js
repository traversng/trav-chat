const chatItemReducer = (state = '', action) => {
	console.log('action in chatItemReducer: ', action + ' state in chatItemReducer: ', state)
	switch(action.type) {
		case 'ADD_CHAT_ITEM':
		return {
			id: action.id,
			text: action.text.trim()
		}
		default: return state;
	}
}

export default chatItemReducer

