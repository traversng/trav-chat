import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import LoginWrap from './components/login/loginWrap' //<LoginWrap />
import ChatApp from './components/chat-components/chatApp' 

const App = () => {
	return(
		<div>
			<ChatApp />
		</div>
	)
}

ReactDOM.render( 
	<App />, 
	document.querySelector('.container') );