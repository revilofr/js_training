/**
 * Created by revilo on 09/08/2016.
 */

/**
 * The following lines allow to create both socketio app and express. Both of them will have their requests dispatched
 * to the same http server. In other words, socketio and request are sharing the same http server.
 */
var express = require ('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
    console.log('Client connected');

    client.on('messages', function(data){
        console.log(data);
    });

    // Emit the messages event on the client (Browser)
    client.emit('welcome', { welcomeMessage: 'Welcome to this chat room !'});
});



app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080);