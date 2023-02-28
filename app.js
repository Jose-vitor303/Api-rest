const express = require("express")
const app = express()
const users = require('./routes/users.js')
const swaggerRoute = require('./routes/swagger.route.js')


app.use(express.json())
app.use('/api/users', users)//Main Route
app.use('/docs', swaggerRoute)

module.exports = app

