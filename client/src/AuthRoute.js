import React from 'react';
import { Redirect, Route } from "react-router";

const AppRoute = ({ component: Component, layout: Layout, isLoggedIn, user, ...rest }) => {
  return (

      <Route
          {...rest}

          render={props => (
              isLoggedIn ? (
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