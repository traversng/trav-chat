import React, {Component} from 'react'
import { connect } from 'react-redux'
import actionNewChatItem from '../actions/action-new-chat-text'
import {newChatPost} from '../actions/chatList';

const mapActionsToProps = (dispatch) => ({
	postChat: (message) => (
		dispatch(newChatPost(message))
	)
});

class NewChatItem extends Component {
	createChat = (e) => {
		e.preventDefault()
		this.props.postChat(this.input.value);
		this.input.value = '';
	}
	render() {
		return(
			<div>
				<form 
					id="chat-form" 
					className="input-group"
					onSubmit={this.createChat}>
					<div className="row">
	  					<div className="col-xs-12">
	    					<div className="input-group">
	      						<input 
	      							ref={ node => this.input = node}
	      						 	type="text" className="form-control" placeholder="Chat away..." 
	      						/>
	      						<span className="input-group-btn">
	        						<button className="btn btn-info" type="submit">Send</button>
	      						</span>
	    					</div>
						</div>
	  				</div>
				</form>
			</div>
		)
	}
}


export default connect(null, mapActionsToProps)(NewChatItem)