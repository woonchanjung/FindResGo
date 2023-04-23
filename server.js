// variables
const express = require('express');
const path = require('path');
const logger = require('morgan');
//connect to db
require('dotenv').config();
require('./config/database');

const app = express();
const fetch = require('node-fetch');

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'));


//routes
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/users', require('./routes/api/users'));
app.use('/api/restaurant', require('./routes/api/restaurant'));
app.use('/api/restaurant/:id/restaurants', require('./routes/api/restaurant'));

// Define route handler for /api/restaurants
app.get('/api/random_restaurant', async (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  console.log(`Fetching restaurants near latitude: ${latitude}, longitude: ${longitude}...`)

  // Make fetch request to Yelp API
  const apiUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&sort_by=best_match&open_now=true&limit=20&latitude=${latitude}&longitude=${longitude}`;
  const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${process.env.VITE_APP_YELP_API_KEY}`
    }
  }; 

  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    if (response.ok) {
      res.json(data);
    } else {
      res.status(500).json({ error: "Error fetching restaurants from Yelp API" });
    }
  } catch (error) {
    console.error("Error fetching restaurants from Yelp API:", error);
    res.status(500).json({ error: "Error fetching restaurants from Yelp API" });
  }
});


//catch all
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//listener
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});