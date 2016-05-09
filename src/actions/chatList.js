import {RECEIVE_CHAT_ITEM, CREATE_CHAT_ITEM} from './chatList';
const Posts = new Firebase('https://travcast.firebaseio.com')

export function fetchPosts() {
	return dispatch => {
		Posts.on('value', snapshot => {
			dispatch({ 
				type: RECEIVE_CHAT_ITEM,
				payload: snapshot.val()
			})
		})
	}
}

export function newChatPost( post ) {
	return dispatch => {
		dispatch({type: CREATE_CHAT_ITEM});
		Posts.push(post);
	}
}