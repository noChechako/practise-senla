/*
eslint linebreak-style: ["error", "windows"]
*/
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
