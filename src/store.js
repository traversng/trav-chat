import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import chatItem from './reducers/reducer-chat-item'
import chatList from './reducers/reducer-chat-list'
import auth from './reducers/reducer-auth'
import createLogger from 'redux-logger';

const chatApp = combineReducers({ 	
	// The keys of the reducers chatApp will be available on the state object
	chatItem,
	auth,
	chatList
});

const store = createStore(chatApp, applyMiddleware(thunk, createLogger()));
export default store