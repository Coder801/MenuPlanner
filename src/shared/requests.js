const baseApiUrl = '/api/';
const headers = {
  'Content-type': 'application/json; charset=UTF-8'
};

export const [ read, create, update, remove ] = [ 'GET', 'POST', 'PUT', 'DELETE' ].map(createMethod);

function createMethod (method) {
  return (url, body) => {
    return fetch(`${baseApiUrl}${url}`,
      { method, headers, body: JSON.stringify(body) }
    ).then(getJson);
  };
}

function getJson(response) {
  return response.json();
}
