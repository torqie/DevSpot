import React from 'react';
import { Redirect, Route } from "react-router";


const AppRoute = ({ component: Component, layout: Layout, user, ...rest }) => {
  let localLoggedIn = localStorage.getItem('loggedIn');
  if(JSON.parse(localLoggedIn) === false || localLoggedIn === null) {
    localLoggedIn = false;
  } else {
    localLoggedIn = true;
  }

  return (
      localLoggedIn ? (
          <Route
              {...rest}
              render={props => (
                <Layout user={user}>
                  <Component user={user} {...props} />
                </Layout>
              )}
          />
      ) : (
          <Redirect to="/" />
      )
)};

export default AppRoute;