import React, { useEffect, useState } from "react";
// import * as restaurantAPI from '../../../routes/api/restaurants';

const UserRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurant data from backend
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/api/addrestaurants");
        const data = await response.json();
        if (response.ok) {
          setRestaurants([...data]);
        } else {
          console.error("Error fetching restaurants:", data.error);
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleAddRestaurant = async () => {
    try {
      const response = await fetch("/api/addrestaurants");
      const data = await response.json();
      if (response.ok) {
        setRestaurants([...restaurants, data]);
      } else {
        console.error("Error fetching restaurants:", data.error);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  // Render restaurant data in UI
  return (
    <div>
      <h1>My Restaurant List</h1>
      {/* {restaurants.map(restaurant => (
        <div key={restaurant._id}>
        <h2>{restaurant.name}</h2>
        <li>{restaurant.location.address}</li>
        <li>
          {restaurant.location.city}, {restaurant.location.}{" "}
          {restaurant.location.zip_code}
        </li>
        <img src={restaurant.image_url} alt={restaurant.name} />
        </div> */}
      <div onClick={handleAddRestaurant}>ADD</div>
    </div>
  );
};

export default UserRestaurantList;
