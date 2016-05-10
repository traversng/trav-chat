import {RECEIVE_FIREBASE_LIST, CREATE_CHAT_ITEM} from './types';
import store from '../store';

const Posts = new Firebase('https://travcast.firebaseio.com')


export function listenForChats() {
	Posts.on('value', snapshot => {
		store.dispatch({ 
			type: RECEIVE_FIREBASE_LIST,
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