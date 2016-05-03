import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux'
import router from './router'

// ================ ACTIONS ================== //
import actionNewChatItem from './actions/action-new-chat-text'

// ================== COMBINE REDUCERS ============ //
import chatApp from './reducers/chatReducer'
	
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

