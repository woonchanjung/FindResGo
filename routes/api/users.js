// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const User = require('../../models/user');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// Route to add a restaurant to the user's restaurant list
router.post('/addRestaurantToList', async (req, res) => {
    const userId = req.body.userId; // User ID
    const restaurant = req.body.restaurant; // Restaurant object to be added
  
    try {
      // Find the user by ID and update the restaurant list
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { restaurantList: restaurant } },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.json(updatedUser);
    } catch (error) {
      console.error('Error adding restaurant to user restaurant list:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
