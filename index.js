require('dotenv').config()
const express = require('express')
const app = express()
require('./models/config')
const contactpage = require('./routes/contactRoute')
app.use(express.json());



app.use('/',contactpage)
console.log('helo env is running', process.env.port);
const server = app.listen(process.env.port, (req, res) => {
    console.log(`server is running on port :${process.env.port}`);
}) 