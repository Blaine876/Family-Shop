import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import Dashboard from "./components/Dashboard/Dashboard";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Family from "./components/Family/Family";
import AddShoppingList from "./components/AddShoppingList/AddShoppingList";
import Profile from "./components/Profile/Profile";

import { AuthContext } from "./context/AuthContext";

const Router = () => {
  const { token } = useContext(AuthContext);
  return (
    <Switch>
      <ProtectedLogin path="/login" token={token} component={Login} />
      <ProtectedLogin path="/register" token={token} component={Register} />
      <ProtectedRoute path="/family" token={token} component={Family} />
      <ProtectedRoute path="/profile" token={token} component={Profile} />
      <ProtectedRoute
        path="/addshoppinglist"
        token={token}
        component={AddShoppingList}
      />
      <ProtectedRoute path="/dashboard" token={token} component={Dashboard} />
    </Switch>
  );
};

const ProtectedRoute = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          <>
            <NavigationBar />
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const ProtectedLogin = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Router;
