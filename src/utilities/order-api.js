import sendRequest from "./send-request";

const BASE_URL = '/api/order'

export function fetchOrders(id){
    return sendRequest(`${BASE_URL}/${id}`, 'GET')
}

export function checkOut(id, source){
    return sendRequest(`${BASE_URL}/${id}`, 'POST', source)
}
  