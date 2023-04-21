const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
    restaurants: [{
        name: String,
        address: String,
        image_url: String
    }]
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

module.exports = mongoose.model('RestaurantList', restaurantListSchema);