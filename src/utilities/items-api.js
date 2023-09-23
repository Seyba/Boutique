import sendRequest from './send-request.js'

const BASE_URL = '/api/items'

//* Admin actions 
export function addProduct(prod) {
  console.log('sending post request')
  return sendRequest(BASE_URL, 'POST', prod)
}

export function fetchProducts(){
  return sendRequest(BASE_URL, 'GET')
}
export function fetchProductById(id){
  return sendRequest(`${BASE_URL}/${id}`, 'GET')
}

export function removeProduct(id){
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export function updateProduct(id, prod){
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', prod)
}
