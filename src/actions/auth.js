import Constants from '../constants'
import Firebase from 'firebase'

const Ref = new Firebase(Constants.FIREBASE)

const Auth = {
	listenForAuth = ( socialNetwork ) => {
		return (dispatch, getState) => {
			Ref.onAuth((authData) => {
				if(authData) {
					dispatch({
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
		return ( dispatch, getState ) => {
			dispatch({ 
				type:  Constants.ATTEMPTING_LOGIN
			})
			Ref.authWithOAuthPopup( socialNetwork, (error, authData) => {
				if(error) {
					dispatch({ type: Constants.DISPLAY_ERROR, error: 'ERROR in login: ' + error })
					dispatch({ type: Constants.LOGOUT })
				} else {
					console.log('successful login with payload: ', authData)
				}
			})
		}	
	},

	userLogout = () => {
		return ( dispatch, getState ) => {
			dispatch({ type: Constants.LOGOUT })
			Ref.unAuth()
		}
	}
}