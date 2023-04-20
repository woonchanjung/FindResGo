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
  async function addRandomRestaurantToList(restaurantId) {
    console.log("Entering addRandomRestaurantToList Function, Restaurant ID:", restaurantId)
    alert(`Restaurant ID: ${restaurantId} added to your list!`)
  }

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
          <p>{randomRestaurant.location.address1}</p>
          <p>
            {randomRestaurant.location.city}, {randomRestaurant.location.state}{" "}
            {randomRestaurant.location.zip_code}
          </p>
          <p>Rating: {randomRestaurant.rating}</p>
          <p>Price: {randomRestaurant.price}</p>
          <p>
            Category:{" "}
            {randomRestaurant.categories
              .map((category) => category.title)
              .join(", ")}
          </p>
          <p>
            Yelp URL:{" "}
            <a
              href={randomRestaurant.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>{" "}
          </p>
          <button onClick={getRandomRestaurant}>Get Random Restaurant</button>
          <button
            onClick={() => addRandomRestaurantToList(randomRestaurant.id)}
          >
            ADD
          </button>
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
