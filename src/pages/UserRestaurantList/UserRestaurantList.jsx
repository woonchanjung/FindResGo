// In your frontend React component for the userRestaurantList page
import React, { useEffect, useState } from 'react';

const UserRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurant data from backend
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('/api/restaurants');
        const data = await response.json();
        if (response.ok) {
          setRestaurants(data);
        } else {
          console.error("Error fetching restaurants:", data.error);
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // Render restaurant data in UI
  return (
    <div>
      <h1>User Restaurant List</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant._id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRestaurantList;
