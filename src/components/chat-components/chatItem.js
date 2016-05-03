import React from 'react'

const ChatItem = ( text ) => {
	console.log('in ChatItem store props: ', text);
	return (
		<li>{ text.text }</li>
	)
}

export default ChatItem
