import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import store from '../store'
// import newChat from '../actions/newChat'
import ChatList from './chatList'
import NewChatItem from './newChatItem'

class App extends Component {
	render() {
		return(
			<div id="chat-container" className="panel panel-default">
				<div className="panel-heading">
					<h3>Trav Cast</h3>
				</div>
				<div className="panel-body">
					<ChatList />
				</div>
				<div className="panel-footer">
					<NewChatItem />
				</div>
			</div>
		)
	}
}

export default App