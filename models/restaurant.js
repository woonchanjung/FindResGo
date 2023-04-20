const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
  // Other fields for restaurant data
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
