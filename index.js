var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    Firebase = require("firebase"),
    fs = require('fs'),
    users = {};

server.listen(3000);

app.get('*', function(req, res){
    var requestedPage = __dirname + req.path;
    console.log('req is ',requestedPage);
    fs.stat(requestedPage, function(err, stat){
        if(err == null){
            console.log('file exists ');
            console.log('res: ',res);
            console.log('requestedPage: ',requestedPage);
            res.sendfile(requestedPage);
        }else if(err.code == 'ENOENT'){
            res.send("<h1>Error: " + res.statusCode + res.statusMessage + '</h1>');
        }else{
            console.log('Some other error: ', err.code);
        }
    });
    //res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection' , function(socket){
    socket.on('new user' , function(name, callback){
        if (name in users){
            callback(false);
        } else {
            callback(true);
            socket.nickname = name;
            users[socket.nickname] = socket;
            //io.sockets.emit('new message' , {nick: socket.nickname, msg: "has connected :)"});
            updateUsers();
            console.log('index.js line 16, logged users: ', Object.keys(users).length + " new user: " + name);
        }
    });

    // Google authentication event
    socket.on('successful login', function(name, callback){
        console.log('serverside successful login name: ', name);
        var user = name.name;
        if (user in users){
            callback(false);
        } else {
            callback(true);
            socket.nickname = user;
            users[socket.nickname] = socket;
            //io.sockets.emit('new message' , {nick: socket.nickname, msg: "has connected :)"});
            updateUsers();
            console.log('index.js line 16, logged users: ', Object.keys(users).length + " new user: " + name);
        }
    });

    function updateUsers(){// Updates users as they are created and when a user disconnects
        io.sockets.emit('usernames' , Object.keys(users));
    }

    socket.on('send message' , function(msg, callback){
        var msg = msg.trim();
        if(msg.substr(0,2) ==='/w'){
            msg = msg.substr(3);
            var index = msg.indexOf(' ');
            if(index !== -1){
                var name = msg.substr(0, index);
                var msg = msg.substr(index + 1);
                if(name in users){
                    console.log("Whisper was sent!");
                    users[name].emit('whisper' ,{msg: msg, nick: socket.nickname});
                } else {
                    callback('Error invalid user!');
                }

            } else {
                callback('Error you must add a message to your whisper!');
            }

        } else {
            io.sockets.emit('new message' ,{msg: msg, nick: socket.nickname});
        }
    });

    //socket.on('message' , function(msg){
    //    io.socket.emit('new message' , msg);
    //});

    socket.on('disconnect' , function(data){
        if(!socket.nickname) return;
        io.sockets.emit('disconnect' , {nick: socket.nickname, disconnect: Date.now()});
        delete users[socket.nickname];
        console.log(socket.nickname + ' has disconnected');
        updateUsers();
    });
});