import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Family from "./components/Family/Family";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/family" component={Family}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
