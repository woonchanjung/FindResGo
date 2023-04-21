<div align="center">

# WELCOME TO FindResGo
### Built by: **[Woonchan Jung](https://www.linkedin.com/in/woonchanjung/)**

![alt text](https://imgur.com/SXIbWuq)

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

## **[CLICK HERE TO CHECKOUT THE FindResGo!](INSERT LINK)**

</div>

## Roadmap

**[TRELLO](https://trello.com/b/Ff58SfTk/findresgo)** /
**[WIREFRAME](https://whimsical.com/wireframe-51Eh6zrNfnTuW7sW5ZmEk6)** /
**[ERD](https://whimsical.com/erd-Ku9nKcVLpEAioAXZ9BWXB4)**

### Description:

**_Brainwaves_** is a Full-Stack React Web Application that utilizes Node.js, Express.js, React, MongoDB, Mongoose, Tailwind Css, and JavaScript to help users track their moods over time. Whether you're feeling happy, sad, or somewhere in between, Brainwaves allows you to record and monitor your emotions in a convenient and user-friendly way. The app utilizes a simple interface that allows you to log your mood with just a few taps. With Brainwaves, you are able to track common triggers and emotions related to your moods. By using Brainwaves, you can take control of your emotional well-being and improve your overall quality of life with just a few taps!

## :link: Associated Links:

Click the following link to be redirected to the User Stories we either have already implemented, or plan on implementing! [Trello](https://trello.com/invite/b/f1wPS0iX/ATTI360f050ba3db39bdd144d5a5405c3093C25F7E1F/brainwaves)

Click the following link to be redirected to the Wireframe, ERD, and Design Inspiration for this project! [Whimsical](https://whimsical.com/brainwaves-6xrPrq391hNE3d896zc3mR)

### Landing Page

![loginPage](https://i.imgur.com/JlA0Oyx.gif)

Welcome to Brainwaves! Log in in order to gain access to the all-in-one mood tracking application!

### Home Page

![HomePage](https://i.imgur.com/15kurIf.gif)

Here is where you are greeted to the varying categories of features currently offered by Brainwaves, with navigations to each location.

### View Mood Page

![ViewMoodPage](https://i.imgur.com/ERy8w7g.gif)

View the moods you make here, along with the local date, and a randomly generated inspirational quote! You can also edit and delete you moods here, if you so choose.


### Add a Mood Page

![AddAMood](https://i.imgur.com/7R12k9C.gif)

This page is where you will be introduced to a short questionnaire to help breakdown your current mental status.

<div align="center">
 <h2>:pencil: The Code Behind The Program:</h2>
</div>

```
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMood = {
      feeling,
      emotions,
      triggers,
      reflection, 
    };
    try {
      const response = await createMood(newMood);
      setMood(newMood);
      localStorage.setItem('mood', JSON.stringify(newMood));
      navigate('/moods');
    } catch (error) {
      console.error(error);
    }
  };

```

<div align="center">
 <h2>:chart_with_upwards_trend: Looking Forward (Roadmap) </h2>
</div>
Brainwaves, like every human, has a lot of growing to do! Here is a short list of some goals for the future: 

Acknowledgements: 
- Kenneth C.
- Matthew G. 
- Evan M.
- Payne F.

Written for **General Assembly Software Engineering Immersive Bootcamp**
