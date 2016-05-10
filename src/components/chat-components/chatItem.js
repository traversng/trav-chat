import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ( state ) => {
	return {
		props: state
	}
}

const ChatItem = ( props ) => {
	let socialNetwork = props.props.auth['socialNetwork']
	console.log('props: ', props)
	return (
		<div>
			<li>
				<span>
					<img src={ props.props.auth.authData[socialNetwork].profileImageURL } alt="user avatar" className="chat-img"/>
				</span>
				{ props.text }
			</li>
		</div>
	)
}





export default connect(mapStateToProps)(ChatItem)

//
