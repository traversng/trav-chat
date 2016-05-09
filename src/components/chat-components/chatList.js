import React from 'react'
import { connect } from 'react-redux'
import chatItemReducer from '../reducers/reducer-chat-list'
import store from '../index'
import ChatItem from './chatItem'

const ChatList = ( props ) => {
	console.log('props in ChatList: ', props)
	let chatList = props.props.chatArray
	return(
	<ul>
    	{ chatList.map( (item) => <ChatItem key={ item.id } state={ props }/> ) }
  	</ul>
  	)
}

const mapStateToProps = ( store ) => {
	return {
		props: store
	}
}

export default connect(mapStateToProps)(ChatList)