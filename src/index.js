import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import Index from './components/Index/Index';
import React from 'react';
import ReactDOM from 'react-dom';
import NavTabs from './components/NavTabs/NavTabs';
import Core from './components/Core/Core';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Core}>
      <IndexRoute component={Index} />
      <Route name="projects" path="projects" component={Index} />
    </Route>
  </Router>, 
  document.querySelector("#app")
);