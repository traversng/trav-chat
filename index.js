var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    nicknames = [];

server.listen(3000);

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection' , function(socket){
    socket.on('new user' , function(name, callback){
        console.log('index.js line 16, logged users: ', nicknames + " new user: " + name);
        if (nicknames.indexOf(name) != -1){
            callback(false);
        } else {
            callback(true);
            socket.nickname = name;
            nicknames.push(socket.nickname);
            updateNicknames();
        }
    });

    function updateNicknames(){// Updates nicknames as they are created and when a user disconnects
        io.sockets.emit('usernames' , nicknames);
    }

    socket.on('send message' , function(msg){
        io.sockets.emit('new message' ,{msg: msg, nick: socket.nickname});
    });

    socket.on('message' , function(msg){
        io.socket.emit('new message' , msg);
    });

    socket.on('disconnect' , function(data){
        if(!socket.nickname) return;
        nicknames.splice(nicknames.indexOf(socket.nickname) , 1);
        updateNicknames();
    });
});