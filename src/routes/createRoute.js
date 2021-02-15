/*
eslint linebreak-style: ["error", "windows"]
*/
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Content from '../pages/Content';
import Film from '../pages/Film';
import NotFound from '../pages/NotFound';

const CreateRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/film/:id" component={Film} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default CreateRoute;
