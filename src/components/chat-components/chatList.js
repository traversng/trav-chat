import React from 'react'

export default const chatList = () => {
	let chatItems = store.getState().chatItems
	console.log('store in PhraseList: ', store.getState())
	return(
	<ul>
    	{ chatItems.map( (chatItem) => <ChatItem key={ chatItem.id } text={ chatItem.text }/> ) }
  	</ul>
  	)
}