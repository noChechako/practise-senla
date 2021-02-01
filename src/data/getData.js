import APIFilms from './APIFilms'

export default  async function getData(req){
    const filmsData =  await APIFilms.get(req);
    console.log(filmsData)
    return filmsData
}   