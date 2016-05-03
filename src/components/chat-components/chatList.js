import React from 'react'
import { connect } from 'react-redux'

const ChatList = () => {
	let chatList = store.getState().chatList
	console.log('chatlist in ChatList: ', chatList)
	return(
	<ul>
    	{ chatList.map( (item) => <ChatItem key={ item.id } text={ item.text }/> ) }
  	</ul>
  	)
}

function mapStateToProps( store ) {
	return {
		chatList: store.getState().chatList
	}
}

export default connect(mapStateToProps)(ChatList)