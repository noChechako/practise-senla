import './App.css';
import Search from './SearchMenu/Search'
import Content from './Films/Content'
import Film from './Films/Film'
import  { BrowserRouter,  Route, Switch } from 'react-router-dom'
import React from 'react';


class NotFound extends React.Component{
  render(){
      return <h2>Ресурс не найден</h2>;
  }
}
function App() {
  return (
    <div className="App">
    <Search/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Content}/>
        <Route path='/:id' component={Film}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
