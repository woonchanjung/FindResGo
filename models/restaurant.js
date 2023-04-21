const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  id: { type: String, required: true },
  name: {type: String, required: true },
  phone: {type: String, required: true },
  address: { type: String, required: true },
  image_url: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);