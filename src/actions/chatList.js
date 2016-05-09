import {RECEIVE_CHAT_ITEM, CREATE_CHAT_ITEM} from './types';
import store from '../store';

const Posts = new Firebase('https://travcast.firebaseio.com')


export function listenForChats() {
	Posts.on('child_added', snapshot => {
		store.dispatch({ 
			type: RECEIVE_CHAT_ITEM,
			payload: snapshot.val()
		})
	})
}

export function newChatPost( post ) {
	return dispatch => {
		dispatch({type: CREATE_CHAT_ITEM});
		Posts.push(post);
	}
}