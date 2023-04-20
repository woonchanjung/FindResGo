import React, { useState, useEffect } from "react";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getRandomRestaurant = async () => {
    try {
      console.log("Entering getRandomRestaurant");
      console.log("lat: ", latitude);
      console.log("long: ", longitude);
      const response = await fetch(
        `/api/restaurants?latitude=${latitude}&longitude=${longitude}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("fetched");
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setRestaurants(data);
        const randomIndex = Math.floor(Math.random() * data.businesses.length);
        console.log("randomIndex:", randomIndex);
        const randomRestaurant = data.businesses[randomIndex];
        console.log("randomRestaurant:", randomRestaurant);
        setRandomRestaurant(randomRestaurant);
      } else {
        setError("Error fetching restaurants. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError("Error fetching restaurants. Please try again later.");
    }
  };

  useEffect(() => {
    // Get user's location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log("Entering getLocation");
            // console.log("Latitude:", position.coords.latitude);
            // console.log("Longitude:", position.coords.longitude);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        setError("Location is not supported by this browser.");
      }
      if (latitude && longitude) {
        getRandomRestaurant();
      }
    };

    getLocation();
    // Calls location only once
    // SOURCE: https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/
  }, [latitude, longitude]);

  // Event Handler to add a restaurant to user's list
  const handleAddRestaurant = async () => {
    try {
      // Send a POST request to the backend to add the randomly generated restaurant
      const response = await fetch('/api/addrestaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(randomRestaurant)
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Restaurant added:", data);
      } else {
        console.error("Error adding restaurant:", data.error);
      }
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {randomRestaurant ? (
        <div>
          <h1>Random Restaurant</h1>
          <h2>{randomRestaurant.name}</h2>
          <div className="ImageContainer">
            <a href={randomRestaurant.url}>
              <img
                src={randomRestaurant.image_url}
                alt={randomRestaurant.name}
              />
            </a>
          </div>
          <ul>
          <li>{randomRestaurant.location.address1}</li>
          <li>
            {randomRestaurant.location.city}, {randomRestaurant.location.state}{" "}
            {randomRestaurant.location.zip_code}
          </li>
          <li>Rating: {randomRestaurant.rating}</li>
          <li>Price: {randomRestaurant.price}</li>
          <li>
            Category:{" "}
            {randomRestaurant.categories
              .map((category) => category.title)
              .join(", ")}
          </li>
          <li>
            Yelp URL:{" "}
            <a
              href={randomRestaurant.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>{" "}
          </li>
          </ul>
          <button onClick={getRandomRestaurant}>Get Random Restaurant</button>
          <button onClick={handleAddRestaurant}>Add Restaurant</button>
        </div>
      ) : (
        <>
          <p>Loading restaurant...</p>
        </>
      )}
    </div>
  );
};

export default Home;
