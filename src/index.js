import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux'
import router from './router'

// ================ ACTIONS ================== //
import actionNewChatItem from './actions/action-new-chat-text'




// ================ REDUCERS ================= // 
import chatItemReducer from './reducers/reducer-chat-item'
import chatListReducer from './reducers/reducer-chat-list'



// ================== COMBINE REDUCERS ============ //
import chatApp from './reducers/chatReducer'

// ================== MIDDLEWARE ================= //

// const actionLogger = ({ dispatch, getState }) => 
// 	(next) => (action) => {
// 		console.log('Will dispatch: ', action);
// 		console.log('current state: ', getState());
// 		console.log('next state: ', getState(next(action)));
// 		return next(action);
// } 
// const middleWare = applyMiddleware(actionLogger)

// ================ LOGIN COMPONENTS ================ // 

// ================ CHAT COMPONENTS ================= // 
import ChatItem from './components/chat-components/chatItem'
import ChatList from './containers/chatList'

// ================ CHAT CONTAINERS ================= // 
import App from './containers/chatContainer'
	
const store = createStore(chatApp);
store.dispatch(actionNewChatItem('Initial Chat Item Yall'))
const render = () => {
	ReactDOM.render(
  	<Provider store={store}>
  		{router}
	</Provider>,
  document.querySelector('.container'));
 } 
render()
store.subscribe(render)

