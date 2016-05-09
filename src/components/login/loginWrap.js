// LOGIN WRAPPER
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaceBookLoginBtn from './facebookLogin'
import GooglePlusLoginBtn from './googlePlusLogin'
import GithubLoginBtn from './githubLogin'
import Auth from '../../actions/auth'


class LoginWrap extends Component {
	render() {
		let props = this.props
		return(
			<div className="jumbotron col-lg-8 col-lg-offset-2">
				<h1 className="text-center">Trav Chat</h1>
				<h3 className="text-center">Login with your social accounts for awesomeness</h3>
			   	<FaceBookLoginBtn />
			   	<GooglePlusLoginBtn />
			   	<GithubLoginBtn />          
			</div>
		);
	}
};


export default LoginWrap 