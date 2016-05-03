import { combineReducers } from 'redux'
import chatItemReducer from './reducer-chat-item'
import chatListReducer from './reducer-chat-list'

const chatApp = combineReducers({ 	
	// The keys of the reducers (chatItem, ) will be available on the state object
	chatItem: chatItemReducer,
	chatList: chatListReducer
});

export default chatApp