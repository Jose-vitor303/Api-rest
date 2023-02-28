const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ //validation
  
  name: {
    type: String,
    required : [true, 'must provide name'], 
    trim: true
  }, 
  dob: {
    type: Date, 
    required : [true, 'the format is yyyy-mm-dd']
  },
  address:{
    type: String,
    required : [true, 'must provide a address'],
    maxlength : [60, "address can not be more than 500 characters"],
    trim : true
  },

  description:{
    type: String,
    required : [true, 'must provide a description'],
    maxlength: [500, "describe can not be more than 500 characters"],
    trim: true
  },

  createdAt:{
    type: Date, 
    immutable : true,
    default : ()=> Date.now(),
  }
})

UserSchema.dob instanceof Date;

module.exports = mongoose.model('User', UserSchema)