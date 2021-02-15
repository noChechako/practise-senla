/*
eslint linebreak-style: ["error", "windows"]
*/
import APIFilms from './APIFilms';

export default async function getFilm() {
  return APIFilms.get('genre/movie/list?api_key=6be28322108b286b7e45d15ac68bb3b2&language=en-US');
}
