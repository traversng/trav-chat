import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoginWrap from './components/login/loginWrap';

const App = () => {
	return (
		<div>
			<LoginWrap />
		</div>
	);
}

ReactDOM.render( <App />, document.querySelector('.container') );