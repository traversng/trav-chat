import React, { Component } from 'react'
import {auth} from '../../actions/auth'


export default (props) => (
	<a 
	onClick={ () => props.login('facebook')}
	id="facebook-btn" 
	className="btn btn-block btn-social btn-facebook">
        <span className="fa fa-facebook"></span> Sign in with Facebook
    </a>
)