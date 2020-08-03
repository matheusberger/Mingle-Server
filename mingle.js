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
    numOfConnections = numOfConnections + 1;
    socket.emit('connect', numOfConnections);

	socket.on('position', function(data) {
		players[socket.id] = data;
	});

	socket.on('offer', (offer) => {
	    //send offer to others with socket.broadcast.emit
        console.log("offer received, sending answer");
        socket.broadcast.emit('offer', offer);
	});
	socket.on('answer', (answer) => {
		console.log("received answer");
	  	//socket.to(id).emit("answer", socket.id, message);
	});
	socket.on('ice-candidate', (message) => {
		console.log("received candidate, sending it to others");
	  	socket.broadcast.emit("ice-candidate", message);
	});

	socket.on('disconnect', () => {
	  delete(players[socket.id]);
	  numOfConnections = numOfConnections - 1;

	  console.log("client disconnected at: " + socket.id);
	});

	setInterval(function() {
		socket.emit('update', { data: Object.values(players) });
	}, 31.25);
});

