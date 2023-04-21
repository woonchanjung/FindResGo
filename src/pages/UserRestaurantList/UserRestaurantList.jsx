import React, { useEffect, useState } from "react";
import * as restaurantAPI from '../../utilities/restaurants-api';
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
    <div>
      <h1>My Restaurant List</h1>
      {restaurants.map(restaurant => (
        <div key={restaurant._id}>
        <h4>{restaurant.name}</h4>
        <ul>
        <li>{restaurant.phone}</li>
        <li>{restaurant.address}</li>
        </ul>
        <img src={restaurant.image_url} alt={restaurant.name} />
        </div>
        ))
      }
      </div>
  );
};

export default UserRestaurantList;
