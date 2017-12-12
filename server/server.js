var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('<a href="file:///F:/web/homeGit/webSocket/web/index.html?">Enjoy joke</a>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on("disconnect", function() {
        console.log("a user go out");
    });
    socket.on("data", function(obj) {
      console.log(obj);
        io.emit("data", obj);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
