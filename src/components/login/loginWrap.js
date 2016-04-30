import React, { Component } from 'react';
import FaceBookLoginBtn from './facebookLogin';
import GooglePlusLoginBtn from './googlePlusLogin';
import GithubLoginBtn from './githubLogin';

export default class LoginWrap extends Component {
	render() {
		return(
			<div>
			<h1 className="text-center">Trav Chat</h1>
			<h3>Login with your social accounts for awesomeness</h3>
			   <FaceBookLoginBtn />
			   <GooglePlusLoginBtn />
			   <GithubLoginBtn />          
			</div>
		);
	}
};

