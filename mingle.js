var io = require('socket.io')({
	transports: ['websocket'],
});

io.attach(4567);

console.log("Server running!");

var numOfConnections = 0;

var players = { };

io.on('connection', function (socket) {
    socket.emit('connect', numOfConnections);

    numOfConnections = numOfConnections + 1;
    console.log(socket.id);

	socket.on('position', function(data) {
		players[socket.id] = data;
	});


	setInterval(function() {
		console.log(players);
		socket.emit('update', players);
	}, 1000);
});