import React, { Component } from 'react'
import ChatForm from './chatForm'

class ChatBody extends Component {
	render() {
		return(
			<div className="container">
				<ul className="chat-container"></ul>
				<ChatForm />
			</div>
		)
	}
}

export default ChatBody