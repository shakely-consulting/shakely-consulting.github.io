import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// import Home from "./components/Home";
import Navigation from "./components/Navigation";

const Main = () => (
  <Switch>
    <Route exact path="/"></Route>
    <Route exact path="/projects"></Route>
  </Switch>
);

const App = () => (
  <div className="">
    <Navigation />
    <Main />
  </div>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
