export function apiCall(route, body = {}, method='post') {
  const request = new Promise((resolve, reject) => {
    const headers = new Headers({ 'Content-Type': 'application/json', });

    const requestDetails = {
      method,
      mode: 'cors',
      headers,
    };

    if (method !== 'GET') requestDetails.body = JSON.stringify(body)

    function handleErrors(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    }

    const serverURL = process.env.REACT_APP_SERVER_URL || `http://localhost:3000`;

    // Make the web request w/ fetch API
    fetch(`${serverURL}/${route}`, requestDetails)
      .then(handleErrors)
      .then(data => resolve(data))
      .catch(err => reject(err));
    });

    new Promise((request, reject) => {
      setTimeout(reject, timeoutDuration, `Request timed out!`);
    });

  return request;
}