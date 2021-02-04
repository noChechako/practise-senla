import Content from '../pages/Content'
import Film from '../pages/Film'
import NotFound from '../pages/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'


let CreateRoute=()=>{
    return (
        <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path='/film/:id' component={Film} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
    )
}
export default CreateRoute;