import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import ChildIndex from './pages/ChildIndex';
import ChildNew from './pages/ChildNew';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ChildIndex} />
    <Route path="child/new" component={ChildNew} />
  </Route>
);
