import sendRequest from "./send-request"
const BASE_URL = '/api/shoppingcart'



export function addItemToCart(id, prodId) {
    console.log('adding items to shopping cart')
    return sendRequest(`${BASE_URL}`, 'POST', prodId)
}
  