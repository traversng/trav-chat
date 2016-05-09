import React, { Component } from 'react'
import Firebase from 'firebase'
import SocialAuthentication from './firebaseSocialAuth'
import Auth from '../../actions/auth'
import Constants from '../../constants'

const Ref = new Firebase(Constants.FIREBASE)

class GooglePlusLoginBtn extends Component {
	handleClick = ( socialNetwork ) => {
		Auth( socialNetwork )
	}

	render() {
		return(
			<a 
			onClick={ this.handleClick.bind(null,'google' ) }
			id="google-btn" 
			className="btn btn-block btn-social btn-google">
	            <span className="fa fa-google"></span> Sign in with Google
	        </a>
		);
	}
};

export default GooglePlusLoginBtn