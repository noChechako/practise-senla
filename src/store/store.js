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
   /* eslint-disabled no-undef */

 
   export {defaultState as defaultState, store as store};
