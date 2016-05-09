import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import chatItemReducer from './reducer-chat-item'
import chatListReducer from './reducer-chat-list'
import authReducer from './reducer-auth'
import actionNewChatItem from '../actions/action-new-chat-text'
import Constants from '../constants'


console.log('thunk: ', thunk)
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const chatApp = combineReducers({ 	
	// The keys of the reducers chatApp will be available on the state object
	auth: authReducer,
	chatItem: chatItemReducer,
	chatArray: chatListReducer
});

const store = createStore(chatApp, applyMiddleware(thunk, logger));
// store.dispatch({
// 	type:  Constants.ATTEMPTING_LOGIN,
// 	auth: {
// 		currently: Constants.ANONYMOUS,
// 		username: null,
// 		uid: null
// 		}
// 	})
export default store