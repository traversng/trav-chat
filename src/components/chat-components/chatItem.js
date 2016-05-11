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
		<div>
			<li>
				<h3>{ props.props.auth.user }</h3>
				<span>
					<img src={ props.props.auth.avatar } alt="user avatar" className="chat-img"/>
				</span>
				{ props.text }
			</li>
		</div>
	)
}





export default connect(mapStateToProps)(ChatItem)

//
