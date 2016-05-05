import Firebase from 'firebase'
import chatItemReducer from './reducer-chat-item'




const Posts = new Firebase('https://travcast.firebaseio.com')

export function fetchPosts() {
	return dispatch => {
		Posts.on('value', snapshot => {
			dispatch({ 
				type: 'FETCH_POSTS',
				payload: snapshot.val()
			})
		})
	}
}

export function newChatPost( post ) {
	return dispatch => {
		Posts.push(post)
	}
}

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


