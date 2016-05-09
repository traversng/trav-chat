import React, { Component } from 'react'
import Firebase from 'firebase'
import SocialAuthentication from './firebaseSocialAuth'
import Auth from '../../actions/auth'
import Constants from '../../constants'

const Ref = new Firebase(Constants.FIREBASE)

class GithubLoginBtn extends Component {
	handleClick = ( socialNetwork ) => {
		console.log('social network in google login: ' + socialNetwork)
		Auth( socialNetwork )
	}
	render() {
		return(
			<a
			onClick={ this.handleClick.bind(null,'github') } 
			id="github-btn" 
			className="btn btn-block btn-social btn-github">
            	<span className="fa fa-github"></span> Sign in with GitHub
        	</a>
		);
	}
};

export default GithubLoginBtn