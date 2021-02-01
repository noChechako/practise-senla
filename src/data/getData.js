import APIFilms from './APIFilms'

export default  async function getData(req){
    const filmsData =  await APIFilms.get(req);
    return filmsData
}   