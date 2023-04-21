// // Import all named exports attached to a usersAPI object
// // This syntax can be helpful documenting where the methods come from 
// import * as usersAPI from './users-api'

// export async function signUp(userData){
//   // Delegate the network request code to the users-api.js API module
//   // which will ultimately return a JSON Web Token (JWT)
//   const token = await usersAPI.signUp(userData)
//   localStorage.setItem('token', token)
//   return getUser()
// }

// export function getToken(){
//   // getItem returns null if there's no string
//   const token = localStorage.getItem('token')
//   if(!token) return null
//   // Obtain the payload of the token
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   // A JWT's exp is expressed in seconds, not milliseconds, so convert
//   if(payload.exp < Date.now() / 1000){
//     // Token has expired - remove it from localStorage
//     localStorage.removeItem('token')
//     return null
//   }
//   return token
// }

// export function getUser(){
//   const token = getToken()
//   // If there's a token, return the user in the payload, otherwise return null
//   return token ? JSON.parse(atob(token.split('.')[1])).user : null
// }

// export function logOut(){
//   localStorage.removeItem('token')
// }

// export async function login(credentials) {
//   // Delegate the AJAX request to the users-api.js
//   // module.
//   const token = await usersAPI.login(credentials);
//   localStorage.setItem('token', token);
//   return getUser();
// }

// export async function checkToken(){
//     // Just so that you don't forget how to use .then
//     return usersAPI.checkToken()
//     // checkToken returns a string, but let's 
//     // make it a Date object for more flexibility
//     .then(dateStr => new Date(dateStr));

//     // using async/await instead of .then()
//     // const tokenExp = await usersAPI.checkToken()
//     // return new Date(tokenExp)
// }


// Serice modules hold the code that implements
// "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Let's check if token has expired...
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ?
    JSON.parse(atob(token.split('.')[1])).user
    :
    null;
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

