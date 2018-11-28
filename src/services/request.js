import config from '../config';

const request = {
  makeRequest: (method, path = '/', queryString = '') => {
    const request = new Request(`${config.APIurl}${path}?${queryString}`, {
      method,
      credentials: 'include',
      headers: {
        'Accept': 'application/json', // eslint-disable-line quote-props
        'Content-Type': 'application/json'
      }
    });

    return fetch(request)
      .then(response => (
        response.status >= 200 && response.status < 300 ?
          Promise.resolve(response) :
          Promise.reject(new Error('Something went wrong'))
      ))
      .then(response => response.json())
  },
};

export default request;