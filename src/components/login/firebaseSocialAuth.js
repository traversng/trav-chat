import Firebase from 'firebase'

const ref = new Firebase('https://travcast.firebaseio.com')
const usersRef = ref.child("users")

const SocialAuthentication = ( socialNetwork ) => {
    ref.authWithOAuthPopup(socialNetwork, function( error, authData ) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
            console.log('socialNetwork is :', typeof socialNetwork);
            var newUser = usersRef.push();
            newUser.set({
                name: authData[socialNetwork].displayName,
                userInfoSrc: authData.provider,
                picture: authData[socialNetwork].profileImageURL
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