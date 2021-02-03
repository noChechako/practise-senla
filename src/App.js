import './App.css';
import Search from './SearchMenu/Search'
import Content from './Films/Content'
import Film from './Films/Film'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';



/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
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

function NotFound() {
  {
    return <h2>Ресурс не найден</h2>;
  }
}
function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Search />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path='/film/:id' component={Film} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>

  );
}
/* eslint-enable react/jsx-no-undef */
/* eslint-enable no-undef */

export default App;
