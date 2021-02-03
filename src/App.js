import './App.css';
import Search from './Components/SearchMenu/Search'
import Content from './Components/Films/Content'
import Film from './Components/Films/Film'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'


/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */


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
