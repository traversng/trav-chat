// LOGIN WRAPPER
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaceBookLoginBtn from './facebookLogin'
import GooglePlusLoginBtn from './googlePlusLogin'
import GithubLoginBtn from './githubLogin'
import {auth} from '../../actions/auth'
import { browserHistory } from 'react-router'


const mapActionsToProps = (dispatch) => ({
	login: (socialNetwork) => (
		dispatch(auth(socialNetwork))
	)
});


class LoginWrap extends Component {
	loginAndGo = (socialNetwork) => {
		this.props.login(socialNetwork)
		.then(() => {
            browserHistory.push('/chat');
		})

	};

	render() {
		let props = this.props
		return(
			<div className="jumbotron col-lg-8 col-lg-offset-2">
				<h1 className="text-center">Trav Chat</h1>
				<h3 className="text-center">Login with your social accounts for awesomeness</h3>
			   	<FaceBookLoginBtn login={this.loginAndGo}/>
			   	<GooglePlusLoginBtn login={this.loginAndGo}/>
			   	<GithubLoginBtn login={this.loginAndGo}/>          
			</div>
		);
	}
};


export default connect(null, mapActionsToProps)(LoginWrap)