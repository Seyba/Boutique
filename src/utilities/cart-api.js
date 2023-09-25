import sendRequest from './send-request.js'

const BASE_URL = '/api/cart'

export function addToCart(id, prodId, quantity) {
  console.log('adding product to cart')
  return sendRequest(`${BASE_URL}/${id}`, 'POST', {prodId, quantity})
}

export function fetchCart(id){
  return sendRequest(`${BASE_URL}/${id}`, 'GET')
}
export function fetchProductById(id){
  return sendRequest(`${BASE_URL}/${id}`, 'GET')
}

export function removeFromCart(userId, prodId){
  return sendRequest(`${BASE_URL}/${userId}/${prodId}`, 'DELETE')
}

// export function updateProduct(id, prod){
//   return sendRequest(`${BASE_URL}/${id}`, 'PUT', prod)
// }
