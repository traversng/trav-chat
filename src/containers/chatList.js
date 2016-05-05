import React from 'react'
import { connect } from 'react-redux'
import chatItemReducer from '../reducers/reducer-chat-list'
import store from '../reducers/chatReducer'
import ChatItem from '../components/chat-components/chatItem'

const ChatList = ( props ) => {
	console.log('props in ChatList: ', props)
	let chatList = props.props.chatArray
	return(
	<ul>
    	{ chatList.map( (item) => <ChatItem key={ item.id } text={ item.text }/> ) }
  	</ul>
  	)
}

const mapStateToProps = ( store ) => {
	return {
		props: store
	}
}

export default connect(mapStateToProps)(ChatList)