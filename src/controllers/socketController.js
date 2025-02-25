module.exports = {
    handleMessage: (io, socket) => {
        socket.on('chat message', (msg) => {
            console.log('📩 Message received:', msg);
            io.emit('chat message', msg); // Kirim ke semua client
        });
    },
    handleDisconnect: (socket) => {
        socket.on('disconnect', () => {
            console.log('🔴 A user disconnected:', socket.id);
        });
    }
};
