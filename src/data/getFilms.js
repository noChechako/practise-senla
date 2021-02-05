import APIFilms from './APIFilms'

export default  async function getFilm(page){
    
    const filmsData =  await APIFilms.get(`/movie/popular?api_key=6be28322108b286b7e45d15ac68bb3b2&language=en&page=${page}`);
    return filmsData
}   