import React, { useState } from "react";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  // Function to add a restaurant to the list
  const onAddButtonClick = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <div>
      <h1>Restaurant List</h1>
      {/* Render the list of restaurants */}
      {restaurants.map((restaurant, index) => (
        <div key={index}>
          <p>Name: {restaurant.name}</p>
          <p>Image: {restaurant.image}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
