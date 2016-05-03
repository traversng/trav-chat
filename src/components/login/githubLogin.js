import React, { Component } from 'react'
import Firebase from 'firebase'
import SocialAuthentication from './firebaseSocialAuth'

const ref = new Firebase('https://travcast.firebaseio.com')

class GithubLoginBtn extends Component {
	handleClick = ( socialNetwork ) => {
		SocialAuthentication( socialNetwork )
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