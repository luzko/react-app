import axios from 'axios';

const baseUrl = 'http://localhost:4000/movies';

export const getApi = (filterSort) => {
  return axios.get(baseUrl, {
    params: {...filterSort}
  }).then(response => {
    return response.data.data;
  })
}
