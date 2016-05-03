import React, { Component } from 'react'
import Firebase from 'firebase'
import SocialAuthentication from './firebaseSocialAuth'

const ref = new Firebase('https://travcast.firebaseio.com')

class GooglePlusLoginBtn extends Component {
	handleClick = ( socialNetwork ) => {
		SocialAuthentication( socialNetwork )
	}

	render() {
		return(
			<a 
			onClick={ this.handleClick( 'google' ) }
			id="google-btn" 
			className="btn btn-block btn-social btn-google">
	            <span className="fa fa-google"></span> Sign in with Google
	        </a>
		);
	}
};

export default GooglePlusLoginBtn