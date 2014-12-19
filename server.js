var fs   = require('fs');
var http = require('http');
var port = process.env.PORT || 8080;

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {

  socket.on('start', function (data) {
    socket.broadcast.emit('start', data);
  });

  socket.on('paint', function (data) {
    socket.broadcast.emit('paint', data);
  });

});

server.listen(port, function () {
  console.log('Server is running on port %s', port);
});
