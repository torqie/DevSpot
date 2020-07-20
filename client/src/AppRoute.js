import React from 'react';
import { Redirect, Route } from "react-router";

const AppRoute = ({ component: Component, layout: Layout, isLoggedIn, user, ...rest }) => {
    return (
      isLoggedIn ? (
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