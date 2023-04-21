import React, { useState, useEffect } from "react";
import * as restaurantApi from "../../utilities/restaurants-api";
import sendRequest from "../../utilities/send-request";
import { getUser } from "../../utilities/users-service";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [list, setList] = useState([]);
  const [user, setUser] = useState(getUser());

  const getRandomRestaurant = async () => {
    try {
      console.log("Entering getRandomRestaurant");
      console.log("lat: ", latitude);
      console.log("long: ", longitude);
      const response = await fetch(
        `/api/random_restaurant?latitude=${latitude}&longitude=${longitude}`,
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

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log("Entering getLocation");
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

  useEffect(() => {
    // Get user's location
    getLocation();
    // Calls location only once
    // SOURCE: https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/
  }, [latitude, longitude]);

  // Event Handler to add a restaurant to user's list
  async function handleAddRestaurant(user_id, id, name, phone, address, image_url) {
    await restaurantApi.addFavorite(user_id, id, name, phone, address, image_url);
    console.log("sent");
  };

  return (
    <div>
      {/* {error && <p>{error}</p>} */}
      {randomRestaurant ? (
        <div>
          <h2>Lucky Restaurant</h2>
          <div className="ImageContainer">
            <a href={randomRestaurant.url}>
              <img
                src={randomRestaurant.image_url}
                alt={randomRestaurant.name}
              />
            </a>
          </div>
          <ul>
          <li>Address: {randomRestaurant.location.address1}</li>
          <li>Phone#: {randomRestaurant.display_phone}</li>
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
            Yelp Link:{" "}
            <a
              href={randomRestaurant.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              YELP
            </a>{" "}
          </li>
          </ul>
          <button onClick={getRandomRestaurant}>Get Another Lucky Restaurant</button>
          <button onClick={() => handleAddRestaurant(user._id, randomRestaurant.id, randomRestaurant.name, randomRestaurant.phone, randomRestaurant.location.address1, randomRestaurant.image_url)}>Add to Favorite</button>
        </div>
      ) : (
        <>
          <p>Building a restaurant for you...</p>
        </>
      )}
    </div>
  );
};

export default Home;
