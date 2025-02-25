//.env
require('dotenv/config')

// App
const path                = require('path');
const express             = require('express');
const app                 = express();

// Router
const userRoutes = require("./src/routes/userRoutes");

// const {myAsyncFunction, myAsyncFunction2, returnJson, removeStringSender, phoneNumberFormatter}        = require("./src/config/helper.js");

// Middleware untuk mengakses folder 'public'
app.use(express.static("public"));

// Middleware to parse JSON
app.use(express.json()); // Untuk menangani JSON body
app.use(express.urlencoded({ extended: true })); // Untuk menangani form-urlencoded body

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// Routes from Router
app.use("/user", userRoutes); // Gunakan route user
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/views/index.html");
});
// app.use('/api/user', require("./routes/user"));

// Start the server
app.listen(process.env.APP_PORT, () => {
    console.log(`✅ Server running at http://localhost:${process.env.APP_PORT}/`);
});
