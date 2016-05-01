

export default const chatItemReducer = (state = '', action) => {
	console.log('state: ', state)
	switch(action.type) {
		case 'ADD_CHAT_ITEM':
		return {
			id: state.length + 1,
			text: action.text.trim()
		}
	}
	return state
}