import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Family from "./Family/Family";
import AddShoppingList from "./AddShoppingList/AddShoppingList";
import Profile from "./Profile/Profile";
import NavigationBar from "./NavigationBar/NavigationBar";

import { AuthContext } from "../context/AuthContext";

const Router = () => {
  const { token } = useContext(AuthContext);
  return (
    <Switch>
      <ProtectedLogin path="/login" token={token} component={Login} />
      <Route path="/register" component={Register} />
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
      render={() =>
        token ? (
          <div>
            <NavigationBar />
            <Component />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const ProtectedLogin = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!token ? <Component /> : <Redirect to="/dashboard" />)}
    />
  );
};

export default Router;
