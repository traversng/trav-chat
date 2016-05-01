import { combineReducers } from 'redux'
import chatItemReducer from './reducer-chat-item'
import chatListReducer from './reducer-chat-list'

export default const reducers = combineReducers({ 
	
	// The keys of the reducers (activePhrase, removedPhrase) will be available on the state object
	chatItem: chatItemReducer,
	chatList: chatListReducer

});

