//.env
require('dotenv/config')

// App
const path                = require('path');
const express             = require('express');
const app                 = express();

// Router
const userRouter   = require("./src/routes/user");
// const {myAsyncFunction, myAsyncFunction2, returnJson, removeStringSender, phoneNumberFormatter}        = require("./src/config/helper.js");

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/user', userRouter);

// Start the server
app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at http://localhost:${process.env.APP_PORT}/`);
});
