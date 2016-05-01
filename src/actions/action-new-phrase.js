
export default const newChatItem = ( chatString ) => {
	console.log('new chat string: ' + chatString);
	return {
		type: 'ADD_CHAT_ITEM',
		text: chatString
	}
}