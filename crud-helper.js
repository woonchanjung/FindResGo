// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Restaurant = require('./models/restaurant');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;
