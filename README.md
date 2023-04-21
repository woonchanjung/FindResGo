<div align="center">

# WELCOME TO FindResGo
### Built by: **[Woonchan Jung](https://www.linkedin.com/in/woonchanjung/)**

![](https://i.imgur.com/SXIbWuq.png)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
![Maintainer](https://img.shields.io/badge/Maintainer-woonchanjung-blue)
![Ask](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

![Follows](https://img.shields.io/github/followers/ryanqle.svg?style=social&label=Follow&maxAge=2592000)

## **[CLICK HERE TO CHECKOUT THE FindResGo!](https://findresgo.herokuapp.com/)**

</div>

## Roadmap

**[TRELLO](https://trello.com/b/Ff58SfTk/findresgo)** /
**[WIREFRAME](https://whimsical.com/wireframe-51Eh6zrNfnTuW7sW5ZmEk6)** /
**[ERD](https://whimsical.com/erd-Ku9nKcVLpEAioAXZ9BWXB4)**

### Description:

**_Brainwaves_** is a Full-Stack React Web Application that utilizes Node.js, Express.js, React, MongoDB, Mongoose, Tailwind Css, and JavaScript to help users track their moods over time. Whether you're feeling happy, sad, or somewhere in between, Brainwaves allows you to record and monitor your emotions in a convenient and user-friendly way. The app utilizes a simple interface that allows you to log your mood with just a few taps. With Brainwaves, you are able to track common triggers and emotions related to your moods. By using Brainwaves, you can take control of your emotional well-being and improve your overall quality of life with just a few taps!

## :link: Associated Links:

Click the following link for search YELP API! [YELP](https://docs.developer.yelp.com/reference/v3_business_search)

Click the following link for GeoLocation [Whimsical](https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/)

### Landing Page

![loginPage]([https://i.imgur.com/JlA0Oyx.gif](https://i.imgur.com/MHlYrs2.png))

### SignUp Page

![SignUp](https://i.imgur.com/bEvhTzg.png)

### Loading Page

![LoadingPage](https://i.imgur.com/253AlYA.png)

### My Restaurant List Page

![MyRestaurantList](https://i.imgur.com/Wuh4QNo.png)

<div align="center">
 <h2>The Code Behind The Program</h2>
</div>

```
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

```

<div align="center">
 <h2> Future IceBox </h2>
</div>

Acknowledgements: 
- Kenneth C.
- Matthew G. 
- Evan M.
- Payne F.

Written for **General Assembly Software Engineering Immersive Bootcamp**
