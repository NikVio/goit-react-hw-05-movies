import axios from 'axios';

const API_KEY = '53d3f6e1440c02fced3811e600aa63b7';
const language = 'en-US';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=${language}&page=1?key=${API_KEY}`
  );
  return response.data;
};

export const fetchdetailsMovies = async id => {
  const response = await axios.get(
    `movie/${id}?language=${language}?key=${API_KEY}`
  );
  return response.data;
};

export const fetchCreditsMovies = async id => {
  const response = await axios.get(
    `movie/${id}/credits?language=${language}?key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviewsMovies = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?language=${language}?key=${API_KEY}`
  );
  return response.data;
};
