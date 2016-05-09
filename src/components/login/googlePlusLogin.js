import React, { Component } from 'react'
import {auth} from '../../actions/auth'

export default (props) => (
	<a 
	onClick={ () => props.login('google')}
	id="google-btn" 
	className="btn btn-block btn-social btn-google">
        <span className="fa fa-google"></span> Sign in with Google
    </a>
)