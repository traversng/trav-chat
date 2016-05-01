import React, { Component } from 'react'

class ChatForm extends Component {
	render() {
		return(
			let input
			<form onSubmit={ e => {
				e.preventDefault()
				store.dispatch({ type: 'ADD_CHAT_ITEM' })
				input.value = ''
			} }>
				<div className="row">
  					<div className="col-lg-6">
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
		)
	}
}

export default ChatForm