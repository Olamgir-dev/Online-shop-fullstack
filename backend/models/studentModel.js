const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Student', studentSchema)