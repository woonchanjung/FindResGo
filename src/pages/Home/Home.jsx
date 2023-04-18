import React, { useState, useEffect } from "react";

const Home = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get user's location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log("Latitude:", position.coords.latitude);
            console.log("Longitude:", position.coords.longitude);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        setError("Location is not supported by this browser.");
      }
    };

    getLocation();
    // Calls location only once
    // SOURCE: https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      // Fetch restaurants data from Yelp API
      const yelpApiUrl = "https://api.yelp.com/v3/businesses/search";
      const yelpApiKey = import.meta.env.REACT_APP_YELP_API_KEY;

      // Options for fetch request from Yelp API
      const options = {
        method: 'GET',
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${yelpApiKey}`,
        },
      };

      // Gets all the restaurants in the user's location using latitude and longitude from geolocation
      fetch(
        `${yelpApiUrl}?term=restaurants&latitude=${latitude}&longitude=${longitude}&open_now=true&sort_by=best_match&limit=20`,
        options
      )
        // Checks if the response is ok
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        // Maps through the data to get the restaurant data we want
        .then((data) => {
          const restaurantData = data.businesses.map
          ((restaurant) => ({
            name: restaurant.name,
            image_url: restaurant.image_url,
            rating: restaurant.rating,
            review_count: restaurant.review_count,
            location: restaurant.location,
            phone: restaurant.phone,
            url: restaurant.url,
          }));
          setRestaurants(restaurantData);
        })
        // Error handling
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, [latitude, longitude]);
  // Function to generate random restaurant
  const handleGenerateRandomRestaurant = () => {
    if (restaurants.length > 0) {
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      setRandomRestaurant(restaurants[randomIndex]);
    }
  };

  return (
    <div>
      {/* Button to trigger handleGenerateRandomRestaurant */}
      <button onClick={handleGenerateRandomRestaurant}>
        Generate Random Restaurant
      </button>
      {/* JSX code for rendering restaurant data in the UI */}
      {randomRestaurant ? (
        <div>
          <h2>Random Restaurant</h2>
          <p>Name: {randomRestaurant.name}</p>
          <p>Image URL: {randomRestaurant.image_url}</p>
          <p>Rating: {randomRestaurant.rating}</p>
          <p>Review Count: {randomRestaurant.review_count}</p>
          <p>Location: {randomRestaurant.location}</p>
          <p>Phone: {randomRestaurant.phone}</p>
          <p>URL: {randomRestaurant.url}</p>
        </div>
      ) : (
        <p>No restaurants available.</p> // Added a message for when randomRestaurant is null
      )}
    </div>
  );
};

export default Home;
