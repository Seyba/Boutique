import { getToken } from "./users-service";
import sendRequest from "./send-request"
const BASE_URL = '/api/users'

// export async function signUp(userData) {
//     console.log('API USER-DATA', userData);
//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(userData)
//     });

//     if(res.ok){
//         return res.json()
//     } else {
//         throw new Error('Invalid Sign Up!!')
//     }
// }
// export async  function fetchAllUsers(){
//   console.log('ALL USERS')
//   const res = await fetch(BASE_URL)
//   if(res.ok){
//     return res.JSON()
//   }else{
//     throw new Error('Data Not Found!!!')
//   }
// }

// export async function login(credentials) {
//     console.log('API USER-DATA', credentials);
//     const res = await fetch(BASE_URL + '/login', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(credentials)
//     });

//     if(res.ok){
//         return res.json()
//     } else {
//         throw new Error('Invalid Credentials!!')
//     }
// }


export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function adminLogin(credentials) {
  return sendRequest(`${BASE_URL}/admin-login`, 'POST', credentials)
}
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken(){
  return sendRequest(`${BASE_URL}/check-token`);
}

export function updateUser(user, id){
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', user)
}
export function removeUser(id){
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
export function getUsers(){
  return sendRequest(BASE_URL, 'GET')
}

export function getSingleUser(id){
  return sendRequest(`${BASE_URL}/${id}`)
}

export function getWishList(){
  return sendRequest(BASE_URL, 'GET')
}

export function saveAddress(){
  return sendRequest(`${BASE_URL}`, 'PUT')
}
// async function sendRequest(url, method = "GET", payload = null) {
//   // Fetch accepts an options object as the 2nd argument
//   // used to include a data payload, set headers, etc.
//   const options = { method };
//   if (payload) {
//     options.headers = { "Content-Type": "application/json" };
//     options.body = JSON.stringify(payload);
//   }

//   const token = getToken();
//   if (token) {
//     // Ensure the headers object exists
//     options.headers = options.headers || {};
//     // Add token to an Authorization header
//     // Prefacing with 'Bearer' is recommended in the HTTP specification
//     options.headers.Authorization = `Bearer ${token}`;
//   }

//   const res = await fetch(url, options);
//   // res.ok will be false if the status code set to 4xx in the controller action
//   if (res.ok) return res.json();
//   throw new Error("Bad Request");
// }