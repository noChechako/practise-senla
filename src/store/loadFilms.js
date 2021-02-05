const getFilms = (dispatch) => {
    dispatch({ type: 'ADD_FILMS', nextPage: 1 })

}
export default getFilms;