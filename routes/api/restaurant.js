const express = require('express');
const router = express.Router();
const Restaurant = require('../../models/restaurant');

// Add a new restaurant to the database
router.post('/', async (req, res) => {
  try {
    // Extract restaurant data from request body
    const { name, address, image } = req.body;

    // Create a new restaurant object
    const newRestaurant = new Restaurant({ name, address, image });

    // Save the new restaurant to the database
    const savedRestaurant = await newRestaurant.save();

    // Send the saved restaurant object as the response
    res.json(savedRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding restaurant" });
  }
});

module.exports = router;
