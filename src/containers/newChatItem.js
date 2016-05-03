import React from 'react'
import { connect } from 'react-redux'
import store from '../index'
import actionNewChatItem from '../actions/action-new-chat-text'

let NewChatItem = ( store ) =>  {
	let input
	console.log('store in ChatBar: ', store);
	return(
		<div>
			<form 
				id="chat-form" 
				className="input-group"
				onSubmit={ e => {
				e.preventDefault()
				store.dispatch(actionNewChatItem(input.value))
				input.value = ''
			} }>
				<div className="row">
  					<div className="col-xs-12">
    					<div className="input-group">
      						<input ref={ node => {
      							input = node
      						}} type="text" className="form-control" placeholder="Chat away..." />
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

const mapDispatchToProps = ( dispatch ) => {
	return {
		onNewChatItemClick: ( text ) => {
			dispatch(actionNewChatItem( text ))
		}
	}
}

export default connect(mapDispatchToProps)(NewChatItem)