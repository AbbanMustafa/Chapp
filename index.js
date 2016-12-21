var app = require('express')();
var io = require('socket.io')(http);
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  console.log('A user has connected');
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});
