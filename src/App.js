import './App.css';
import Search from './components/SearchMenu/Search'

import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import CreateRoute from './routes/createRoute'


/* eslint-disable react/jsx-no-undef */



function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Search />
      <CreateRoute/>
      </div>
    </Provider>

  );
}
/* eslint-enable react/jsx-no-undef */

export default App;
