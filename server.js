// server.js
const WebSocket     = require('ws');
const mysql         = require('mysql');

const connection    = require("./src/config/database");
const {returnJson}  = require("./src/helper.js");

const user_Model    = require('./src/models/user_model');

const userModel     = new user_Model();
const socketSERVER = new WebSocket.Server({ port: process.env.WEBSOCKET_PORT });

const userLoadData = () => {
        userModel.findByFlag(1).then((result) => {
        let userData = {
            user_id: result.user_username,
        }
        console.log('USER READ: ', JSON.stringify(userData));
        // socket.send(JSON.stringify(userData));

        socketSERVER.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(userData));
                // console.log('1 Data found');
            }
        });        
        // returnJson(1, 'Read ', userData);    
    }).catch((error) => {
        console.error('Error retrieving user:', error);
        // returnJson(0, error.sqlMessage);    
    });
};
// Set interval untuk mengambil data setiap 30 detik
setInterval(userLoadData, 5000);

// socketSERVER.on('connection', function connection(ws) {
socketSERVER.on('connection', (socket) => {
    console.log('WEBSOCKET connected');

    
    socket.on('message', function incoming(message) {
        console.log('WEBSOCKET Received: %s', message);
        // Echo the received message back to the client
        // socket.send(`Server received: ${message}`);
    });
    socket.on('close', () => {
        console.log('WEBSOCKET disconnected');
    });
});

console.log('WEBSOCKET server is running on ws://localhost:'+process.env.WEBSOCKET_PORT);

module.exports = socketSERVER;