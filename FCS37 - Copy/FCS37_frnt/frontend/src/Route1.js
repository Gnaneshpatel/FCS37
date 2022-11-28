import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import About from './About'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Admin from './Admin';
import UserProfile from './UserProfile';
import OrganizationProfile from './OrganizationProfile';

const Route1 = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/signin"> <SignIn/> </Route>
      <Route path="/signup"><SignUp/> </Route>
      <Route path="/admin"><Admin/> </Route>
      <Route path="/userprofile/12" ><UserProfile/> </Route>
      <Route path="/organizationprofile" ><OrganizationProfile/> </Route>
      <Route path="/" > <App/> </Route>
    </Switch>
    </BrowserRouter>
  );
};

export default Route1;
