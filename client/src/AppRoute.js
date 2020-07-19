import React from 'react';
import { Redirect, Route } from "react-router";

const AppRoute = ({ component: Component, layout: Layout, isLoggedIn, user, ...rest }) => {
    return (

    <Route
        {...rest}

        render={props => (
            isLoggedIn ? (
                <Layout user={user}>
                  <Component {...props} />
                </Layout>
            ) : (
                <Redirect to="/" />
            )
        )}
    />

)};

export default AppRoute;