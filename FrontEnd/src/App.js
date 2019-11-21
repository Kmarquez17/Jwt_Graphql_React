import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login'

import Toolbar from "./components/Toolbar";

function App() {
  return (
    <Router>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
