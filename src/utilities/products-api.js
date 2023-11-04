import sendRequest from './send-request';

const BASE_URL = '/api/products';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createProduct() {
  return sendRequest(BASE_URL)
}