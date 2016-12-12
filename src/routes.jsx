import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import People from './containers/People';
import NotFound from './containers/NotFound';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import uris from './uris';


export default () =>
  /**
   * Please keep routes in alphabetical order
   */
  <Route path={uris.pages.root} component={App} >
    <Route component={Home}>
      <IndexRoute component={MovieList} />
      <Route
        path={uris.pages.movieDetail}
        component={MovieDetail}
      />
    </Route>
    { /* Catch all route */ }
    <Route
      path={uris.pages.people}
      component={People}
    />
    <Route path="*" component={NotFound} status={404} />
  </Route>;
