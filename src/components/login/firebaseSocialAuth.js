import Firebase from 'firebase'

const ref = new Firebase('https://travcast.firebaseio.com')
const usersRef = ref.child("users")

const SocialAuthentication = ( socialNetwork ) => {
    ref.authWithOAuthPopup(socialNetwork, function( error, authData ) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
            console.log('socialNetwork is :', socialNetwork);
            dispatch({
                type: LOGIN_USER,
                uid: authData.uid,
                username: authData.github.displayName || authData.github.username
            });
            // add socket event to trigger index.html here...
            var authenticUser = {
                name: authData[socialNetwork].displayName,
                userInfoSrc: authData.provider,
                picture: authData[socialNetwork].profileImageURL
            };
            socket.emit('successful login', authenticUser, function(data){
                console.log('successful login data: ' +data+ 'authenticUser: ' +authenticUser.name);
            });
        }
    });
};

export default SocialAuthentication