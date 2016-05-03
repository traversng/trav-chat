import React, { Component } from 'react'
import Firebase from 'firebase'
import SocialAuthentication from './firebaseSocialAuth'

const ref = new Firebase('https://travcast.firebaseio.com')

class FaceBookLoginBtn extends Component {
	handleClick = ( socialNetwork ) => {
		SocialAuthentication( socialNetwork )
	}

	render() {
		return(
			<a 
			onClick={ this.handleClick('facebook') }
			id="facebook-btn" 
			className="btn btn-block btn-social btn-facebook">
	            <span className="fa fa-facebook"></span> Sign in with Facebook 
	        </a>
		);
	}
};

export default FaceBookLoginBtn