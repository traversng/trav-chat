import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import store from '../index'
import actionNewChatItem from '../actions/action-new-chat-text'
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
					<ChatList { ...bindActionCreators( actionNewChatItem, store.dispatch) }/>
				</div>
				<div className="panel-footer">
					<NewChatItem { ...bindActionCreators( actionNewChatItem, store.dispatch) }/>
				</div>
			</div>
		)
	}
}

export default App