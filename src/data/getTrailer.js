/*
eslint linebreak-style: ["error", "windows"]
*/
import APIFilms from './APIFilms';

export default async function getFilms(id) {
  return APIFilms.get(`/movie/${id}/videos?api_key=6be28322108b286b7e45d15ac68bb3b2
  `);
}
