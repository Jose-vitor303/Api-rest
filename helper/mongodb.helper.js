const { MongoMemoryServer } = require("mongodb-memory-server")
const mongoose = require("mongoose")
const connectDB = require("../db/connect.js")

let mongoServer;

exports.connect = async()=> {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await connectDB(uri)
};

exports.cleanData = async()=> {
  await mongoose.connection.db.dropDatabase();
};

exports.disconnect = async ()=> {
  await mongoose.disconnect();
  await mongoServer.stop();
};
