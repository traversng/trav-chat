$(function($){
    var socket = io.connect();
    var $chatBtn = $('#btn-chat');
    var $messageBox = $('#message');
    var $chat = $('.chat');
    var $users = $('#users');
    var ref = new Firebase('https://travcast.firebaseio.com');//This creates a connection to our unique firebase db
    var usersRef = ref.child("users");//Creates and uses a database child called users...this is where we will store our users information
    var conversationRef = ref.child("conversation");
    var $username = $('#usernameEmail');
    var $password = $('#password');
    var $facebookBtn = $('#facebook-btn');
    var $githubbtn = $('#github-btn');
    var $googlebtn = $('#google-btn');
    var $loginWrap = $('#login-wrap');
    var $contentWrap = $('#content-wrap');
    var $loginForm = $('#login-form');

    // Hide the chat ui by default
    $contentWrap.hide();

    // Social Authentication
    var SocialAuthentication = function(socialNetwork){
        ref.authWithOAuthPopup(socialNetwork, function(error, authData) {
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
                $loginWrap.hide();
                $contentWrap.show();
                $messageBox.focus();
            }
        });
    };

    // Google authentication and user creation
    $googlebtn.click(function(){
        SocialAuthentication('google');
    });

    // Github authentication and user creation
    $githubbtn.click(function(){
        SocialAuthentication('github');
    });

    // facebook authentication and user creation
    $facebookBtn.click(function(){
        SocialAuthentication('facebook');
    });

    // Email password user creation/login
    $loginForm.submit(function(e){
        var newUser = usersRef.push();// Pushing to the existing ref.child('users') creates a new user child everytime this form is submitted whereas if we were to use usersRef.set() we would be overidding the user child everytime
        newUser.set({
            username: $username.val(),
            password: $password.val()
        });
        var authenticUser = {
            username: $username.val(),
            password: $password.val()
        };
        socket.emit('successful login', authenticUser, function(data){
            console.log('successful login data: ' +data+ 'authenticUser: ' +authenticUser);
        });
        $loginWrap.hide();
        $contentWrap.show();
        $messageBox.focus();
        console.log('username: ' +username+ 'password: ' + password);
    });

    socket.on('usernames' , function(data){
        console.log('getting usernames: ' , data);
        var html = "";
        for(var i = 0; i < data.length; i++){
            html +="<span onclick=" + "whisperName(this,'/w')" + ">" + data[i] + "</span></br>";
        }
        $users.html(html);
    });

    $messageBox.keypress(function(e){
        var key = e.which;
        if(key == 13){
            socket.emit('send message', $messageBox.val(), function(data){
                $chat.append("<span class='error'><b>" + data + "</span></br>");
            });
            $messageBox.val("");
        }
        $chat.animate({
            scrollTop: $('.chat li:last-child').offset().top + 'px'
        }, 1000);
    });

    // Chat item DOM creation
    var ChatItem = function(data){
        var li = $('<li>',{
            class: 'left clearfix'
        });
        var span = $('<span>',{
            class: 'chat-img pull-left',
            alt: 'User Avatar'
        });
        var strong = $('<strong>',{
            class: 'primary-font',
            text: data.user
        });
        var userImg = $('<img>',{
            src: data.picture,
            class: 'chat-img'
        });
        var chatDiv = $('<div>',{
            class:'chat-body clearfix'
        });
        var chatDivHeader = $('<div>',{
            class: 'header'
        });
        var chatText = $('<p>',{
            text: data.msg,
            class: 'chat-text'
        });
        $(span).append(userImg);
        $(chatDivHeader).append(strong);
        $(chatDiv).append(chatDivHeader,chatText);
        $(li).append(span, chatDiv);
        $chat.append(li);
    };

    // Append new messages to the DOM
    socket.on('new message' , function(data){
        ChatItem(data);

        //push message to firebase
        conversationRef.push({
            name: data.user,
            text: data.msg,
            timestamp: Date.now()
        });
        $messageBox.focus();

        socket.on('whisper' , function(data){
            $chat.append("<span class='whisper'><br>" + data.user + " </b>" + "whispers:  " + data.msg + " </span></br>");

            //push message to firebase
            ref.push({name: data.user, whisper: data.msg, timestamp: Date.now()});
        });

        socket.on('disconnect', function(data){
            //push disconnect event to firebase
            ref.push({name: data.user, disconnect: data.disconnect});
            ChatItem({msg: 'disconnected', user: data.user, src: data.picture});
        });
    });
});



function whisperName(ele, spChar){
    var str = spChar + " ";
    var $msg = $('#message');

    str += $(ele).text() + " ";
    console.log("String Test:", str);
    $msg.val(str);
    $msg.focus();

    return str;
}