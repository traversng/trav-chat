let chatItemId = 0
const actionNewChatItem = ( chatString ) => {
	console.log('new chat string: ' + chatString);
	return {
		id: chatItemId++,
		type: 'ADD_CHAT_ITEM',
		text: chatString
	}
}

export default actionNewChatItem