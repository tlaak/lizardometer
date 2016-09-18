import axios from 'axios';

const apiEndpoint = 'https://widgister.herokuapp.com/challenge/frontend';

// Connect to the api to get some data
export function getData() {
  return axios.get(apiEndpoint)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
