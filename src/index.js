import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux'

// ================ ACTIONS ================== //
let chatItemId = 0
const newChatItem = ( chatString ) => {
	console.log('new chat string: ' + chatString);
	return {
		id: chatItemId++,
		type: 'ADD_CHAT_ITEM',
		text: chatString
	}
}


// ================ REDUCERS ================= // 

const chatItemReducer = (state = '', action) => {
	console.log('action in chatItemReducer: ', action + ' state in chatItemReducer: ', state)
	switch(action.type) {
		case 'ADD_CHAT_ITEM':
		return {
			id: action.id,
			text: action.text.trim()
		}
		default: return state;
	}
}

const chatListReducer = (state = [], action) => {
	console.log('state in chatListReducer: ', state);
	switch(action.type) {
		case 'ADD_CHAT_ITEM':
		return [
			...state,
			chatItemReducer(state, action)
		]
		default: return state;
	}
}

// ================== COMBINE REDUCERS ============ //
const chatApp = combineReducers({ 	
	// The keys of the reducers (chatItem, ) will be available on the state object
	chatItem: chatItemReducer,
	chatList: chatListReducer
});

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

const ChatItem = ( text ) => {
	console.log('in ChatItem store props: ', text);
	return (
		<li>{ text.text }</li>
	)
}

const ChatList = () => {
	let chatList = store.getState().chatList
	console.log('chatlist in ChatList: ', chatList)
	return(
	<ul>
    	{ chatList.map( (item) => <ChatItem key={ item.id } text={ item.text }/> ) }
  	</ul>
  	)
}


let NewChatItem = () =>  {
	let input
	console.log('store in ChatBar: ', store);
	return(
		<div>
			<form 
				id="chat-form" 
				className="navbar-fixed-bottom"
				onSubmit={ e => {
				e.preventDefault()
				store.dispatch(newChatItem(input.value))
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
		</div>
	)
}

class App extends Component {
	render() {
		return(
			<div>
				<ChatList />
				<NewChatItem />
			</div>
		)
	}
}
	
const store = createStore(chatApp);
store.dispatch(newChatItem('Initial Chat Item Yall'))
const render = () => {
	ReactDOM.render( 
		<Provider store={ store } >
			<App { ...bindActionCreators( newChatItem, store.dispatch) }/>
		</Provider>, 
		document.querySelector('.container') );
}
render()
store.subscribe(render)

