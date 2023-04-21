const Restaurant = require("../models/restaurant");
const RestaurantList = require("../models/restaurantlist");

async function deleteRestaurant(req, res) {
  const restaurantList = await RestaurantList.findOne({ user: req.user._id });
  const foundRestaurant = await Restaurant.findById(req.params.id);
  thisRestaurant = restaurantList.restaurant;
  thisRestaurant.remove(foundRestaurant);
  restaurantList
    .save()
    .then(() => {
      res.redirect(`/restaurantlist/${restaurantList._id}`);
    })
    .catcht(function (err) {
      return next(err);
    });
}

async function addRestaurant(req, res) {
  try {
    const restaurantList = await RestaurantList.findOne({ user: req.user._id });
    const foundRestaurant = await Restaurant.findOne({ id: req.params.id });
    const myRestaurantList = restaurantList.restaurant;
    myRestaurantList.push(foundRestaurant);
    restaurantList.save();
    res.redirect(`/restaurantlist/${restaurantList._id}`);
  } catch (err) {
    console.log(err);
  }
}

// Add an restaurant to the userREstaurantList
async function addToList(req, res) {
  const list = await Restaurant.getList(req.user._id);
  await list.addRestaurantToList(req.params.id);
  res.json(list);
}

// Get all list
async function index(req, res) {
  const restaurants = await Restaurant.find({});
  res.json(restaurants);
}

async function getList(req, res) {
  return this.findOneAndUpdate(
    // find a restaurant by userId
    { user: userId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
}

module.exports = {
  deleteRestaurant,
  index,
  addToList,
  getList,
  addRestaurant,
};
