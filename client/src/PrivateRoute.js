import React from 'react';
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, layout: Layout, isLoggedIn, user, ...rest }) => {
  return (
  isLoggedIn ?

      <Route
      {...rest}
  render={props => (
      <Layout user={user}>
        <Component {...props} />
      </Layout>
  )}
  />
      :
      <Redirect to="/" />



)};

export default PrivateRoute;