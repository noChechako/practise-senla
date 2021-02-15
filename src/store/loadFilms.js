/*
eslint linebreak-style: ["error", "windows"]
*/
const loadFilms = (dispatch) => {
  dispatch({ type: 'ADD_FILMS', nextPage: 1 });
};
export default loadFilms;
