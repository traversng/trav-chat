import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import router from './router'
import Auth from './actions/auth'

// ================ ACTIONS ================== //
import actionNewChatItem from './actions/action-new-chat-text'

// ================== COMBINE REDUCERS ============ //
import chatApp from './reducers/chatReducer'
	
const render = () => {
	ReactDOM.render(
  	<Provider store={chatApp}>
  		{router}
	</Provider>,
  document.querySelector('.container'));
 } 
render()
chatApp.subscribe(render)


