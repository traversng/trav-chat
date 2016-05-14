import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ( state ) => {
	return {
		props: state
	}
}

const ChatItem = ( props ) => {
	console.log('props: ', props)
	return (
		<div className="media">
			<div className="media-left">
				<img className="chat-img media-object" src={ props.userAvatar } alt="user avatar"/>
			</div>
			<div className="chat-list-item media-body">
				<h4 className="media-heading">{ props.userName }</h4>
				<p className="chat-text well">{ props.text }</p>
			</div>
		</div>
	)
}





export default connect(mapStateToProps)(ChatItem)

//
