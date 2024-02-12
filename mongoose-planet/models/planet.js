const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  poisonous: {
    type: String,
    required: true,
    enum: ['true', 'false']
  }
}, { 
  timestamps: true 
});




const planetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true,
    enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest']
  },
  population: {
    type: Number,
    required: true,
    min: 0,
    max: 9999999
  },
  plants: [plantSchema],
  humans: [{type: Schema.Types.ObjectId,
    ref: 'Explorer'}]
  }, { 
  timestamps: true 
});


const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;