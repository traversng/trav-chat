import React, { Component } from 'react'

class FaceBookLoginBtn extends Component {
	render() {
		return(
			<a id="facebook-btn" className="btn btn-block btn-social btn-facebook">
	            <span className="fa fa-facebook"></span> Sign in with Facebook 
	        </a>
		);
	}
};

export default FaceBookLoginBtn