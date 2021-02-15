/*
eslint linebreak-style: ["error", "windows"]
*/
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import Search from './Components/SearchMenu/Search';
import { store } from './store/store';
import CreateRoute from './routes/createRoute';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Search />
        <CreateRoute />
      </div>
    </Provider>
  );
}

export default App;
