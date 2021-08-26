const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    unique: false,
  },
  age: {
    type: String,
    minlength: 2,
    unique: false,
  },
  email: {
    type: String,
    minlength: 3,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    unique: false,
  },
})

const User = mongoose.model('user', UserSchema)

module.exports = User