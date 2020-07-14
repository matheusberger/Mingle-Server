const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

console.log("Server running!");

var numOfConnections = 0;
var players = { };

io.on('connection', function (socket) {
	console.log("client connected at: " + socket.id);
    socket.emit('connect', numOfConnections);

    numOfConnections = numOfConnections + 1;

	socket.on('position', function(data) {
		players[socket.id] = data;
	});


	setInterval(function() {
		socket.emit('update', { data: Object.values(players) });
	}, 31.25);
});