import React from 'react'
import { connect } from 'react-redux'

const ChatItem = ( text, user ) => {
	console.log('user: ', user)
	return (
		<div>
			<li>
				{ text.text }
				<span>
					<img src={ user.avatar } alt="user avatar" className="chat-img"/>
				</span>
			</li>
		</div>
	)
}

const mapStateToProps = ( state ) => {
	return {
		user: state 
	}
}



export default connect(mapStateToProps)(ChatItem)
