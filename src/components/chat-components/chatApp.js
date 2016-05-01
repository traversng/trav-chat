import React, { Component } from 'react'
import ChatBody from './chatBody'
import ChatForm from './chatForm'

class ChatApp extends Component {
	render() {
		return(
			<div className="container">
				<ChatBody />
			</div>
		)
	}
}

export default ChatApp