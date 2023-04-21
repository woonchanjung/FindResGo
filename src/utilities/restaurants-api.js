import sendRequest from "./send-request";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/restaurant'

export function getAll() {
  return sendRequest(BASE_URL);
}

export function addFavorite(user_id, id, name, phone, address, image_url){
  return sendRequest(`${BASE_URL}/${user_id}`, 'POST', {user_id, id, name, phone, address, image_url})
}

export function getFavorite(user_id) {
  return sendRequest(`${BASE_URL}/${user_id}`, 'GET');
}