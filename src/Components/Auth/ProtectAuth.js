import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, getUser,...rest }) => {
  console.log({ component: Component, user, ...rest });
  return (
    <Route
      {...rest}
      render={props => {
        if (user) { // here is check if user exist
          return <Component {...props} user={user} getUser={getUser}/>;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", prevPath: props.location.pathname }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;