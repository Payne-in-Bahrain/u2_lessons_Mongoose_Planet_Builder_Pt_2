const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const explorerSchema = new Schema({
  
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, { 
  timestamps: true 
});

const Explorer = mongoose.model('Explorer', explorerSchema);

module.exports = Explorer;