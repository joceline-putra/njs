require('dotenv/config')

const express             = require('express');
const app                 = express();

const userRouter   = require("./src/routes/user");
// const {myAsyncFunction, myAsyncFunction2, returnJson, removeStringSender, phoneNumberFormatter}        = require("./src/helper.js");

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRouter);

// Start the server
app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at http://localhost:${process.env.APP_PORT}/`);
});
