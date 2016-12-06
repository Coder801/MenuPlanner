const baseApiUrl = '/api/';

export const get = (url) => {
  return fetch(`${baseApiUrl}${url}`).then(response => response.json());
};
