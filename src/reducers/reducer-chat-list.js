

export default const chatListReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_CHAT_ITEM':
		return [
			...state,
			chatItemReducer(state, action)
		]
	}
	return state
}