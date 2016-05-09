import React from 'react'
import { connect } from 'react-redux'
import chatItemReducer from '../reducers/reducer-chat-list'
import store from '../store'
import ChatItem from '../components/chat-components/chatItem'

const mapStateToProps = (store) => ({
	chatList: store.chatList
});

const ChatList = ( props ) => (
	<ul>
    	{ chatList.map( (item) => <ChatItem key={ item.id } text={ item.text }/> ) }
  	</ul>
)


export default connect(mapStateToProps)(ChatList)