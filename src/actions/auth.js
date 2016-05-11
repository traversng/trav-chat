import Constants from '../constants'
import Firebase from 'firebase'
import connect from 'react-redux'
import * as types from './types';
import { push } from 'react-router-redux'
import { browserHistory } from 'react-router'
const Ref = new Firebase(Constants.FIREBASE)

export const auth = (socialNetwork) => (
	dispatch => {
		dispatch({type: types.LOGIN});
		return new Promise((resolve, reject) => {
			Ref.authWithOAuthPopup(socialNetwork, (err, authData) => {
				if (err) {
					console.error(err.stack)
					dispatch({type: types.LOGIN_COMPLETE, error: true, payload: err,});
					reject(err);
				} else {
					dispatch({
	                	type: types.LOGIN_COMPLETE,
	                	payload: { 	// Need to specify want I want on the state object. Currently placing the entire authData firebase response on payload. 
	                				// This is causing complications in the chat component. I want each post to be proceeded by the socialnetworks displayname
	                				// I want this to be available for lines 12 - 14 of containers -> newChatItem.js
	                		user: authData[socialNetwork].displayName,
	                		avatar: authData[socialNetwork].profileImageURL,
	                		authData
	                	}
	             	});
	             	resolve(authData);
				}
			});
		})
	}
);

const Auth = (socialNetwork) => {
    Ref.authWithOAuthPopup(socialNetwork, (error, authData) => {
        store.dispatch({ type: Constants.ATTEMPTING_LOGIN })
        console.log('Ref.authWithOAuthPopup')
        if (error) {
            store.dispatch({ type: Constants.DISPLAY_ERROR, error: 'ERROR in login: ' + error })
            store.dispatch({ type: Constants.LOGOUT })
        } else {
            console.log('successful login with payload: ', authData)
            console.log('user is: ' + authData[socialNetwork].displayName);
            store.dispatch({
                type: Constants.LOGIN_USER,
                username: authData[socialNetwork].displayName,
                uid: authData.uid,
                avatar: authData[socialNetwork].profileImageURL
            })
            browserHistory.push('/chat')
        }
    })
}

export default Auth
