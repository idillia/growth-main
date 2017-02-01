import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ProfilePage from './components/profile/ProfilePage'; //eslint-disable-line import/no-named-as-default
import ImagePage from './components/screenshot/ImagePage'; //eslint-disable-line import/no-named-as-default
import HomePage from './components/home/HomePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/:id" component={ProfilePage} />
    <Route path="screenshot/:id" component={ImagePage} />
  </Route>  
);

  