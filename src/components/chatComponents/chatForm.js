import React, { Component } from 'react'

class ChatForm extends Component {
	render() {
		return(
			<form>
				<div class="row">
  					<div class="col-lg-6">
    					<div class="input-group">
      						<span class="input-group-btn">
        						<button class="btn btn-secondary" type="button">Send</button>
      						</span>
      						<input type="text" class="form-control" placeholder="Search for..." />
    					</div>
					</div>
  				</div>
			</form>
		)
	}
}