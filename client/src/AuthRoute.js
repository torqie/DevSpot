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

      <Route
          {...rest}

          render={props => (
              localLoggedIn ? (
                  <Redirect to="/news-feed" />
              ) : (
                  <Layout>
                    <Component {...props} />
                  </Layout>
              )
          )}
      />

  )};

export default AppRoute;