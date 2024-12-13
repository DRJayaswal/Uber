const dotenv = require('dotenv')
dotenv.config();
const userRouters = require('./routes/user.routes.js')
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

const connectToDB = require('./db/db.js')

connectToDB();
app.get('/',(req,res) => {
    res.send('Hello There !!');
})

app.use("/users",userRouters);

module.exports = app;