import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage/Homepage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Homepage />}
        />
      </Switch>
    </BrowserRouter>
  );
}
