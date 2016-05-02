import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// ================ ACTIONS ================== //
const newChatItem = ( chatString ) => {
	console.log('new chat string: ' + chatString);
	return store.dispatch({
		type: 'ADD_CHAT_ITEM',
		text: chatString
	})
}


// ================ REDUCERS ================= // 

const chatItemReducer = (state = '', action) => {
	console.log('state in chatItemReducer: ', state)
	switch(action.type) {
		case 'ADD_CHAT_ITEM':
		return {
			id: state.length + 1,
			text: action.text.trim()
		}
	}
	return state
}

const chatListReducer = (state = [], action) => {
	console.log('state in chatListReducer: ', state);
	switch(action.type) {
		case 'ADD_CHAT_ITEM':
		return [
			...state,
			chatItemReducer(state, action)
		]
	}
	return state
}

// ================== COMBINE REDUCERS ============ //

const chatApp = combineReducers({ 
	
	// The keys of the reducers (activePhrase, removedPhrase) will be available on the state object
	chatItem: chatItemReducer,
	chatList: chatListReducer

});

// ================== MIDDLEWARE ================= //

const actionLogger = ({ dispatch, getState }) => 
	(next) => (action) => {
		console.log('Will dispatch: ', action);
		console.log('current state: ', getState());
		console.log('next state: ', getState(next(action)));
		return next(action);
} 
const middleWare = applyMiddleware(actionLogger)

// ================ LOGIN COMPONENTS ================ // 

class GithubLoginBtn extends Component {
	render() {
		return(
			<a id="github-btn" className="btn btn-block btn-social btn-github">
            	<span className="fa fa-github"></span> Sign in with GitHub
        	</a>
		);
	}
};

class FaceBookLoginBtn extends Component {
	render() {
		return(
			<a id="facebook-btn" className="btn btn-block btn-social btn-facebook">
	            <span className="fa fa-facebook"></span> Sign in with Facebook 
	        </a>
		);
	}
};

class GooglePlusLoginBtn extends Component {
	render() {
		return(
			<a id="google-btn" className="btn btn-block btn-social btn-google">
	            <span className="fa fa-google"></span> Sign in with Google
	        </a>
		);
	}
};

// LOGIN WRAPPER
class LoginWrap extends Component {
	render() {
		return(
			<div>
			<h1 className="text-center">Trav Chat</h1>
			<h3>Login with your social accounts for awesomeness</h3>
			   <FaceBookLoginBtn />
			   <GooglePlusLoginBtn />
			   <GithubLoginBtn />          
			</div>
		);
	}
};

// ================ CHAT COMPONENTS ================= // 

const ChatItem = () => {
	return (
		<li>{ props.chatItem.text }</li>
	)
}

const ChatList = () => {
	let chatItems = store.getState()
	console.log('store in PhraseList: ', store.getState())
	return(
	<ul>
    	{ chatItems.map( (chatItem) => <ChatItem key={ chatItem.id } text={ chatItem.text }/> ) }
  	</ul>
  	)
}


class ChatBar extends Component {
	render() {
		let input
		console.log('store in ChatBar: ', store);
		return(
			<form onSubmit={ e => {
				e.preventDefault()
				newChatItem( input.value )
				input.value = ''
			} }>
				<div className="row">
  					<div className="col-lg-6">
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
		)
	}
}

class ChatBody extends Component {
	render() {
		return (
			<div>
				<ChatBar />
			</div>
		)
	}
}

class ChatContainerComponent extends Component {
	render() {
		return(
			<ChatBody props={ store }/>
		)
	}
}
	
const store = createStore(chatApp, middleWare);

ReactDOM.render( 
	<Provider store={ store } >
		<ChatContainerComponent />
	</Provider>, 
	document.querySelector('.container') );