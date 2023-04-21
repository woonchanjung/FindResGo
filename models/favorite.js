const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  restaurant: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    image_url: { type: String, required: true }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('favorites', favoriteSchema);
