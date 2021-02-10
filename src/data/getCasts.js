import APIFilms from './APIFilms'

export default  async function getFilms(id){
    
    const filmsData =  await APIFilms.get(`/movie/${id}/credits?api_key=6be28322108b286b7e45d15ac68bb3b2`);
    return filmsData
}   