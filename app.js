//.env
require('dotenv/config')

// App
const path                = require('path');
const express             = require('express');
const http                = require('http'); // Tambahkan ini untuk membuat server HTTP
const socketIo            = require('socket.io'); // Import socket.io

const app                   = express();
const server                = http.createServer(app); // Buat server HTTP
const io                    = socketIo(server); // Bind socket.io ke server

// Router
const userRoutes = require("./src/routes/userRoutes");
const socketRoutes = require("./src/routes/socketRoutes");

// const {myAsyncFunction, myAsyncFunction2, returnJson, removeStringSender, phoneNumberFormatter}        = require("./src/config/helper.js");

// Middleware untuk mengakses folder 'public'
app.use(express.static("public"));
app.use(express.json()); // Untuk menangani JSON body
app.use(express.urlencoded({ extended: true })); // Untuk menangani form-urlencoded body

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// Routes dari Express
app.use("/user", userRoutes); // Gunakan route user
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/views/index.html");
});
app.get("/websocket", (req, res) => res.sendFile(__dirname + "/src/views/websocket.html"));

// Pasang WebSocket Routes
socketRoutes(io); // Panggil socketRoutes dengan io
// app.use('/api/user', require("./routes/user"));

// Start the server
// app.listen(process.env.APP_PORT, () => {
//     console.log(`✅ Server running at http://localhost:${process.env.APP_PORT}/`);
// });
server.listen(process.env.APP_PORT || 4020, () => {
    console.log(`✅ Server running at http://localhost:${process.env.APP_PORT || 4020}/`);
});