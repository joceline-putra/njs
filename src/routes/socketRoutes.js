const socketController = require('../controllers/socketController');

// module.exports = (io) => {
//     io.on('connection', (socket) => {
//         console.log('🔵 A user connected:', socket.id);

//         // Menerima pesan dari client
//         socket.on('chat message', (msg) => {
//             console.log('📩 Message received:', msg);
//             io.emit('chat message', msg); // Kirim ke semua client
//         });

//         // Disconnect event
//         socket.on('disconnect', () => {
//             console.log('🔴 A user disconnected:', socket.id);
//         });
//     });
// };

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('✅ SOCKET User ID:', socket.id);

        // Gunakan controller
        socketController.handleMessage(io, socket);
        socketController.handleDisconnect(socket);
    });
};