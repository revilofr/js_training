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
var userList = [];

io.on('connection', function(client){
    console.log('Client connected');

    client.on('join', function(name){
        addUser(name);
        client.nickname = name;
        console.log(name + " joined the chat");
        client.broadcast.emit('join', client.nickname);//tells everyone that a new one has joined the chat room

        //provides the list of already connecter users to the upcomming user
        for (var i=0; i<userList.length; i++){
            client.emit('join', userList[i]);
        }
    });

    client.on('messages', function(data){
        console.log(data);
        client.broadcast.emit('messages', client.nickname + ": "  + data);
        client.emit("messages", client.nickname + ": "  + data);
    });

    // Emit the messages event on the client (Browser)
    //client.emit('welcome', { welcomeMessage: 'Welcome to this chat room !'});

    client.on('disconnect', function (){
        disconnectUser(client.nickname);
    });

    function disconnectUser(user){
        client.broadcast.emit('disconnect', user);
    }
});




app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static('css'));

server.listen(8080);


function addUser(userName){
    userList.push(userName);
}