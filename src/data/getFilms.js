/*
eslint linebreak-style: ["error", "windows"]
*/
import APIFilms from './APIFilms';

export default async function getFilms(page) {
  return APIFilms.get(`/movie/popular?api_key=6be28322108b286b7e45d15ac68bb3b2&language=en&page=${page}`);
}
