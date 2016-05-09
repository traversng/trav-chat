import React, { Component } from 'react'
import {render} from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import router from './router'
import Auth from './actions/auth'

// ================ ACTIONS ================== //
import actionNewChatItem from './actions/action-new-chat-text'

// ================== COMBINE REDUCERS ============ //
import chatApp from './store'
	

render(
  	<Provider store={chatApp}>
  		{router}
	</Provider>,
  	document.querySelector('.container')
 );






