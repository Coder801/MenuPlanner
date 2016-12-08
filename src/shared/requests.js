const baseApiUrl = '/api/';

export const [ read, create, update, remove ] = [ 'GET', 'POST', 'PUT', 'DELETE' ].map(createMethod);

function createMethod (method) {
  return (url, body = {}) => fetch(`${baseApiUrl}${url}`, { method, body }).then(getJson);
}

function getJson(response) {
  return response.json();
}
