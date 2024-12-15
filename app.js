const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const cors = require('cors');
const userRouters = require('./routes/user.routes.js')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cookieParser());

const connectToDB = require('./db/db.js')

connectToDB();
app.get('/',(req,res) => {
    res.send('Hello There !!');
})

app.use("/users",userRouters);


module.exports = app;