import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import ChildIndex from './pages/ChildIndex';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ChildIndex} />
    
  </Route>
);
