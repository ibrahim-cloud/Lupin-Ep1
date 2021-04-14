import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, isAuthenticatedSuperAdmin } from "./helpers";

const SuperAdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticatedSuperAdmin.is_super_admin == true ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/AdminLogin"
                    }}
                />
            )
        }
    />
);

export default SuperAdminRoute;