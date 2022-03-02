import React from "react";
import Home from "./Home/Home";
import Navbar from "./NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Home/Detail";

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
