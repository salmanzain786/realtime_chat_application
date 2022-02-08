var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile('D:/myReactApp/chat_application_node/server_side/index.html');});

users = {};
io.on('connection',socket =>{
	socket.on('new_user_joined', name => {
		users[socket.id] = name;
		socket.broadcast.emit("new_join", {message : "Just joining The Chat", name : name}); 
	});

	socket.on('send',message => {
		socket.broadcast.emit('recieve',{message : message, name : users[socket.id]})
	});
});

http.listen(3000, function(){
   console.log('listening on localhost:3000');
});