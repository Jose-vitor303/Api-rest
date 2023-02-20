const connectDB = require('./db/connect.js')
const express = require('express')
const app = express()
const users = require('./routes/users.js')
require('dotenv').config()

app.use(express.json())

//Main route
app.use('/api/users', users)

const port = 3000

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`It's running on ${port}`))

    } catch (error) {
        console.log(error)
    }
}

start();


module.exports = app