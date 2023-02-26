const dataBase = require("./controllers/user.js")
const makeApp = require("./app.js")
const connectDB = require('./db/connect.js')
require('dotenv').config()
const port = 3000

const app = makeApp(dataBase)


const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`It's running on ${port}`))

    } catch (error) {
        console.log(error)
    }
}

start();

module.exports = app;