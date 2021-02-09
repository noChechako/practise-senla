import APIFilms from './APIFilms'

export default  async function getComents(id){
    const filmsData =  await APIFilms.get(`/movie/${id}/reviews?api_key=6be28322108b286b7e45d15ac68bb3b2`);
    return filmsData
}   