import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import chatItemReducer from './reducer-chat-item'
import chatListReducer from './reducer-chat-list'
import authReducer from './authentication'
import actionNewChatItem from '../actions/action-new-chat-text'

const chatApp = combineReducers({ 	
	// The keys of the reducers (chatItem, ) will be available on the state object
	user: authReducer,
	chatItem: chatItemReducer,
	chatArray: chatListReducer
});

const store = createStore(chatApp, applyMiddleware(thunk));
store.dispatch(actionNewChatItem('Initial Chat Item Yall'))

export default chatApp