import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import ChildIndex from './pages/ChildIndex';
import ChildNew from './pages/ChildNew';
import TaskList from './pages/ChildTasks';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ChildIndex} />
    <Route path="child/new" component={ChildNew} />
    <Route path="children/tasks/:id" component={TaskList} />
  </Route>
);
