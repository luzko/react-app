import axios from 'axios';

const baseUrl = 'http://localhost:4000/movies/';

export const getApi = (filterSort) => {
  return axios.get(baseUrl, {
    params: {...filterSort}
  }).then(response => {
    return response.data.data
  })
}

export const deleteApi = (id) => {
  return axios.delete(baseUrl + id)
}

export const postApi = (movie) => {
  return axios.post(baseUrl, movie)
}

export const updateApi = (movie) => {
  return axios.put(baseUrl, movie)
}
