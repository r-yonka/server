
const WebSocket = require('ws');

const PORT = 5000;

const wsServer = new WebSocket.Server({
    port: PORT // leaving port

});

wsServer.on('connection', function(socket){
    // Some feedback on the console
    console.log("A client just connected.");

    // Attach some behaviour to the incoming socket
    socket.on('message', function(msg){
        console.log("Recieved message from the client: "+ msg );
        //socket.send("Right back at you bitch: " + msg);

        // Broadcast that messsage to all connected clients
        wsServer.clients.forEach(function(client){
            client.send("Someone said: " + msg);
        });
    });

});

console.log((new Date())+ "Server is listening on port: " + PORT);