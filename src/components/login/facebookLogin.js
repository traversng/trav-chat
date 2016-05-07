import React, { Component } from 'react'
import Firebase from 'firebase'
import Auth from '../../actions/auth'
import Constants from '../../constants'

console.log('in facebook login: ', Constants);
const Ref = new Firebase(Constants.FIREBASE)

class FaceBookLoginBtn extends Component {
	handleClick = ( socialNetwork ) => {
		Auth.attemptLogin( socialNetwork )
	}

	render() {
		return(
			<a 
			onClick={ this.handleClick.bind(null,'facebook') }
			id="facebook-btn" 
			className="btn btn-block btn-social btn-facebook">
	            <span className="fa fa-facebook"></span> Sign in with Facebook 
	        </a>
		);
	}
};

export default FaceBookLoginBtn