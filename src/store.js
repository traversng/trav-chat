import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import chatList from './reducers/reducer-chat-list'
import auth from './reducers/reducer-auth'
import createLogger from 'redux-logger';

const chatApp = combineReducers({ 	
	auth,
	chatList
});

const store = createStore(chatApp, applyMiddleware(thunk, createLogger()));
export default store