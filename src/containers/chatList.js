import React from 'react'
import { connect } from 'react-redux'
import chatItemReducer from '../reducers/reducer-chat-list'
import store from '../store'
import ChatItem from '../components/chat-components/chatItem'
import {listenForChats} from '../actions/chatList';

listenForChats();

const mapStateToProps = (store) => ({
	chatList: store.chatList
});

const ChatList = ( props ) => (
	<ul>
    	{ props.chatList.map( (item, i) => <ChatItem key={i} text={ item.text }/> ) }
  	</ul>
)


export default connect(mapStateToProps)(ChatList)