import Constants from '../constants'
import Firebase from 'firebase'
import connect from 'react-redux'
import store from '../reducers/chatReducer'
import { push } from 'react-router-redux'
import { browserHistory } from 'react-router'
const Ref = new Firebase(Constants.FIREBASE)

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
