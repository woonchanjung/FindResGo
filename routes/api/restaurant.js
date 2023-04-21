const express = require('express');
const router = express.Router();
const Restaurant = require('../../models/restaurant');
const Favorite = require('../../models/favorite');
const mongoose = require('mongoose');


router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
})

router.post('/:user_id', async (req, res) => {
  const { id, name, phone, address, image_url } = req.body;
  const { user_id } = req.params;

  try {
    let userFavorites = await Favorite.findOne({ user_id });
    if (!userFavorites) {
      userFavorites = new Favorite({ user_id });
    }

    // Check if the restaurant already exists in the user's favorites
    const restaurantExists = userFavorites.restaurant.some(restaurant => restaurant.id === id);
    if (restaurantExists) {
      return res.status(409).json({ message: 'Restaurant already exists in favorites' });
    }

    const restaurant = new Restaurant({
      id,
      name,
      phone,
      address,
      image_url
    });

    const savedRestaurant = await restaurant.save();
    userFavorites.restaurant.push(savedRestaurant);
    await userFavorites.save();

    res.status(201).json(userFavorites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});



router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  try {
    const userFavorites = await Favorite.findOne({ user_id });
    if (!userFavorites) {
      return res.status(404).json({ message: 'User not found' });
    }

    const restaurantIds = userFavorites.restaurant.map(restaurant => restaurant.id);
    const restaurants = await Restaurant.find({ id: { $in: restaurantIds } });

    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;