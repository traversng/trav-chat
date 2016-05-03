import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux'

// ================ ACTIONS ================== //
import actionNewChatItem from './actions/action-new-chat-text'




// ================ REDUCERS ================= // 
import chatItemReducer from './reducers/reducer-chat-item'
import chatListReducer from './reducers/reducer-chat-list'



// ================== COMBINE REDUCERS ============ //
import chatApp from './reducers/chatReducer'

// ================== MIDDLEWARE ================= //

// const actionLogger = ({ dispatch, getState }) => 
// 	(next) => (action) => {
// 		console.log('Will dispatch: ', action);
// 		console.log('current state: ', getState());
// 		console.log('next state: ', getState(next(action)));
// 		return next(action);
// } 
// const middleWare = applyMiddleware(actionLogger)

// ================ LOGIN COMPONENTS ================ // 









// ================ CHAT COMPONENTS ================= // 
import ChatItem from './components/chat-components/chatItem'
import ChatList from './components/chat-components/chatList'


let NewChatItem = () =>  {
	let input
	console.log('store in ChatBar: ', store);
	return(
		<div>
			<form 
				id="chat-form" 
				className="input-group"
				onSubmit={ e => {
				e.preventDefault()
				store.dispatch(actionNewChatItem(input.value))
				input.value = ''
			} }>
				<div className="row">
  					<div className="col-xs-12">
    					<div className="input-group">
      						<input ref={ node => {
      							input = node
      						}} type="text" className="form-control" placeholder="Chat away..." />
      						<span className="input-group-btn">
        						<button className="btn btn-info" type="submit">Send</button>
      						</span>
    					</div>
					</div>
  				</div>
			</form>
		</div>
	)
}

class App extends Component {
	render() {
		return(
			<div id="chat-container" className="panel panel-default">
				<div className="panel-heading">
					<h3>Trav Cast</h3>
				</div>
				<div className="panel-body">
					<ChatList />
				</div>
				<div className="panel-footer">
					<NewChatItem />
				</div>
			</div>
		)
	}
}
	
const store = createStore(chatApp);
store.dispatch(actionNewChatItem('Initial Chat Item Yall'))
const render = () => {
	ReactDOM.render( 
		<Provider store={ store } >
			<App { ...bindActionCreators( actionNewChatItem, store.dispatch) }/>
		</Provider>, 
		document.querySelector('.container') );
}
render()
store.subscribe(render)

