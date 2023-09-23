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
  