import axios from 'axios';

const API_KEY = '53d3f6e1440c02fced3811e600aa63b7';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&page=1?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchDetailsMovies = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchCreditsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviewsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
