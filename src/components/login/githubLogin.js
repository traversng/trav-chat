import React, { Component } from 'react'
import {auth} from '../../actions/auth'


export default (props) => (
	<a 
	onClick={ () => props.login('github')}
	id="github-btn" 
	className="btn btn-block btn-social btn-github">
        <span className="fa fa-github"></span> Sign in with Github
    </a>
)