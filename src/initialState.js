import Constants from './constants'

const initialState = {
	auth: {
		currently: Constants.ANONYMOUS,
		username: null,
		uid: null
	}
}

export default initialState