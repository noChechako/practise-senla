import { createStore } from 'redux'
 /* eslint-enabled no-undef */

const defaultState = {
    page: 1,
    
  }
  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'ADD_FILMS':
        return { ...state, page: state.page + action.nextPage}
      default: return state
    }
  }
  const store = createStore(reducer)
  export default store;
 /* eslint-disabled no-undef */
