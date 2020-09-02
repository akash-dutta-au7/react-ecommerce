import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//firebase-auth

// All pages
const HomePage = lazy(() => import('../Containers/HomePage'));
//navbar menus
const ShopPage = lazy(() => import('../Containers/ShopPage'));
const SignInPage = lazy(() => import('../Containers/SignInPage'));
const Register = lazy(() => import('../Containers/Register'));
//category pages
const Electronics = lazy(() => import('../Containers/Electronics'));

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/*navbar menus*/}
          <Route exact path='/shop/' component={ShopPage} />
          <Route exact path='/signin/' component={SignInPage} />
          <Route exact path='/register/' component={Register} />
          {/*category pages*/}
          <Route exact path='/shop/electronics' component={Electronics} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
