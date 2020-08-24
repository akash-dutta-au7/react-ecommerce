import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// All pages
const HomePage = lazy(() => import('../Containers/HomePage'));
const Electronics = lazy(() => import('../Containers/Electronics'));
const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/electronics' component={Electronics} />
      </Switch>
    </div>
  );
};

export default AppRouter;
