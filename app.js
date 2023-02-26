const express = require("express")
const users = require('./routes/users.js')

const defaultBD = (dataBase)=>{

    const app = express()
    app.use(express.json())
    app.use('/api/users', users)//Main Route

    return app;
}

module.exports = defaultBD

