import React, { useEffect, useState } from "react";
import * as restaurantAPI from "../../utilities/restaurants-api";
import { getUser } from "../../utilities/users-service";

const UserRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useState(getUser());

  useEffect(function () {
    async function getRestaurants() {
      const restaurants = await restaurantAPI.getFavorite(user._id);
      setRestaurants(restaurants);
      console.log(restaurants);
    }
    getRestaurants(restaurants);
  }, []);

  // Render restaurant data in UI
  return (
    <div className="DetailsContainer">
      <h1>{user.name}'s Restaurants</h1>
      <hr></hr>
      <div class="row">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id}>
            <div class="column">
              <div className="ImageContainer">
                <img src={restaurant.image_url} alt={restaurant.name} />
              </div>
            </div>
            <div class="column">
              <ul>
                <li>Restaurant Name: {restaurant.name}</li>
                <li>Phone#: {restaurant.phone}</li>
                <li>Address: {restaurant.address}</li>
                <hr></hr>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRestaurantList;
