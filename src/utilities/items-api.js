import sendRequest from './send-request.js'

const BASE_URL = '/api/items'

export async  function fetchAllUsers(){
  console.log('ALL USERS')
  const res = await fetch(BASE_URL)
  if(res.ok){
    return res.JSON()
  }else{
    throw new Error('Data Not Found!!!')
  }
}

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
