import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, componentTwo: ComponentTwo, componentThree: ComponentThree, user, getUser, filterCallProp, ...rest }) => {
  console.log({ component: Component, user, ...rest });
  return (
    <Route
      {...rest}
      render={props => {
        if (user) { // here is check if user exist
          return (
            <React.Fragment>
              <ComponentTwo filterCallProp={filterCallProp}/>
              <Component {...props} user={user} getUser={getUser}/>
              <ComponentThree user={user}/>
            </React.Fragment>
          );
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