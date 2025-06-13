//.env
require('dotenv/config')

// Required
const path                = require('path');
const express             = require('express');
const http                = require('http'); // Tambahkan ini untuk membuat server HTTP
const socketIo            = require('socket.io'); // Import socket.io

// Config
const app                   = express();
const server                = http.createServer(app); // Buat server HTTP
const io                    = socketIo(server); // Bind socket.io ke server

// Router
const userRoutes            = require("./src/routes/userRoutes");
const socketRoutes          = require("./src/routes/socketRoutes");

// const {myAsyncFunction, myAsyncFunction2, returnJson, removeStringSender, phoneNumberFormatter}        = require("./src/config/helper.js");

// Middleware untuk mengakses folder 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Untuk menangani JSON body
app.use(express.urlencoded({ extended: true })); // Untuk menangani form-urlencoded body

// Routes dari Express
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/src/views/index.html");
// });
app.use("/user", userRoutes); // Gunakan route user
app.get("/socket_client", (req, res) => res.sendFile(__dirname + "/public/socket_client_1.html"));
app.get("/socket_client_2", (req, res) => res.sendFile(__dirname + "/public/socket_client_2.html"));
app.get("/socket_server", (req, res) => res.sendFile(__dirname + "/public/socket_server.html"));

// Pasang WebSocket Routes
socketRoutes(io); // Panggil socketRoutes dengan io
// app.use('/api/user', require("./routes/user"));

const rooms = new Set(); // Simpan room unik
io.on('connection', (socket) => {

    socket.on('join_room', (roomId) => {
        console.log('================================');
        console.log('Socket ID     :', socket.id);
        console.log('Join Room ID  :', roomId);
        console.log('Waktu         :', new Date().toLocaleString());
        console.log('================================');
    
        socket.join(roomId);
        rooms.add(roomId);
        console.log(`Socket ${socket.id} masuk ke ${roomId}`);
        io.emit('room_list', Array.from(rooms));
    });

    socket.on('notify_room', ({ room, message }) => {
        io.to(room).emit('notify', message);
    });
    
    socket.on('notify_all', (msg) => {
        io.emit('notify', msg);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
});

// Fallback: jika tidak ada route yang cocok, kirim index.html dari public
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
// app.listen(process.env.APP_PORT, () => {
//     console.log(`✅ Server running at http://localhost:${process.env.APP_PORT}/`);
// });
server.listen(process.env.APP_PORT || 4020, () => {
    console.log(`✅ Server running at http://localhost:${process.env.APP_PORT || 4020}/`);
});