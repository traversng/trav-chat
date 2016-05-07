import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Auth from './actions/auth'

import App from './containers/chatContainer'
import Login from './components/login/loginWrap'

export default (
	<Router history={browserHistory}>
		<Route path="/" component={ Login } />
		<Route path="chat" component={ App } onEnter={ Auth } />
	</Router>
)