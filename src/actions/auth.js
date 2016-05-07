import Constants from '../constants'
import Firebase from 'firebase'
import connect from 'react-redux'
import chatApp from '../reducers/chatReducer'

const Ref = new Firebase(Constants.FIREBASE)

const Auth = () => {
	listenForAuth = ( socialNetwork ) => {
		return ( dispatch, getState ) => {
			Ref.onAuth((authData) => {
				if(authData) {
					console.log('authenticated')
					chatApp.dispatch({
						type: Constants.LOGIN_USER,
						uid: authData.uid,
						username: authData.socialNetwork.displayName || authData.socialNetwork.userName 
					})
				} else if(getState().auth.currently !== Constants.ANONYMOUS) {
					dispatch({ type: Constants.LOGOUT })
				}
			})
		}
	},

	attemptLogin = ( socialNetwork ) => {
		console.log('in attemptLogin socialNetwork is: ', socialNetwork);
			Ref.authWithOAuthPopup(socialNetwork, (error, authData) => {
				console.log('Ref.authWithOAuthPopup')
				if(error) {
					dispatch({ type: Constants.DISPLAY_ERROR, error: 'ERROR in login: ' + error })
					dispatch({ type: Constants.LOGOUT })
				} else {
					console.log('successful login with payload: ', authData)
					console.log('user is: ' + authData[socialNetwork].displayName);
					dispatch({
						type: Constants.LOGIN_USER,
						username: authData[socialNetwork].displayName,
						uid: authData.uid
					})
				}
			})
	},

	userLogout = () => {
		return ( dispatch, getState ) => {
			dispatch({ type: Constants.LOGOUT })
			Ref.unAuth();
		}
	}
}

const mapDispatchToProps = () => {
	return bindActionCreators( { Auth }, dispatch )
}

export default connect(mapDispatchToProps)(Auth)