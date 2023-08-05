import axios from 'axios';

const base_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'bca5dc3653msh2fb591f71d2e640p19638bjsnc7bd69c29ce0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${base_URL}/${url}`,options);
  return data;
}

