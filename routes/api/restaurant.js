const express = require('express');
const router = express.Router();
const Restaurant = require('../../models/restaurant');

// Add a new restaurant to the user's restaurant list
app.post('/api/addrestaurants', async (req, res) => {
  console.log("API called");
  try {

    // Create a new restaurant object with the data from the request body
    const newRestaurant = new Restaurant({
      name: req.body.name,
      address: req.body.address,
      image: req.body.image
      // Add other fields as needed
    });

    // Save the new restaurant to the database
    await newRestaurant.save();

    res.json(newRestaurant);
  } catch (error) {
    console.error("Error adding restaurant:", error);
    res.status(500).json({ error: "Error adding restaurant" });
  }
});