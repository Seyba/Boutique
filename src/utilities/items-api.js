import sendRequest from './send-request.js'

const BASE_URL = '/api/items'

export async function addNewItem(prod) {
    console.log('ADDING NEW ITEM', prod);
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(prod)
    });

    if(res.ok){
        return res.json()
    } else {
        throw new Error('Entry failed')
    }
}

export async  function fetchAllUsers(){
  console.log('ALL USERS')
  const res = await fetch(BASE_URL)
  if(res.ok){
    return res.JSON()
  }else{
    throw new Error('Data Not Found!!!')
  }
}


export async function addProduct(prod) {
    console.log('sending post request')
    return sendRequest('/api/items', 'POST', prod)
}
  