// import axios from 'axios'

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

// const options = {
//   url: BASE_URL,
//   params: {
//     q: 'orange',
//     maxResults: '50',
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// }

// export const fetchAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options)

//   return data
// }

// recipe of cake

import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  url: BASE_URL,
  params: {
    q: 'ASMR',
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}
export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data
}