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

FindResGo is a web application that helps you discover and save your favorite restaurants. With FindResGo, you can search for restaurants based on your location and save restaurants to your personal list for easy access later.

Features:
- Search for restaurants near your location: FindResGo uses your current location to provide you with a list of restaurants in your area, so you can easily find the perfect spot for your next meal.
- View detailed restaurant information: Get access to important details about each restaurant, such as ratings, reviews, photos, and contact information, to help you make informed dining decisions.
- Save your favorite restaurants: Found a restaurant you love? Save it to your personal list on FindResGo, so you can easily access it later and keep track of your favorite dining spots.
- User-friendly interface: FindResGo features a clean and intuitive user interface that makes it easy to search for, view, and save restaurants with just a few clicks.

Whether you're a foodie looking for new culinary experiences or simply want a convenient way to keep track of your favorite restaurants, FindResGo is the perfect tool for you. Happy dining!


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

- Share restaurant suggestions with friends: Easily share restaurant suggestions with your friends through social media or messaging apps, so you can plan dining outings together.
- View reviews and ratings: Get access to reviews and ratings of the suggested restaurants, helping you make informed dining decisions based on the experiences of other diners.
- Discover nearby tourist attractions: FindResGo suggests nearby tourist attractions or landmarks to visit before or after your restaurant visit, enhancing your overall dining experience.
- Filter suggestions based on cuisine and price: Customize your restaurant suggestions by filtering based on cuisine type and price range, ensuring that you find restaurants that match your preferences and budget.

Acknowledgements: 
- Kenneth C.
- Matthew G. 
- Evan M.
- Payne F.

Written for **General Assembly Software Engineering Immersive Bootcamp**
