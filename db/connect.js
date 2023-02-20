const mongoose = require('mongoose')


const connectDB = async (url) =>{
    try {
        await mongoose.connect(url)
        return console.log("Connect to the database")
    } catch (err) {
        return console.log(err)
    }

}

module.exports = connectDB

