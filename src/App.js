import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./icon.css";
import ReactGa from "react-ga";

import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/notfound";
import State from "./components/state";
import States from "./components/states";
import City from "./components/city";
import IP from "./components/ip";


function App() {
  const history = require("history").createBrowserHistory;

  useEffect(() => {
    ReactGa.initialize("UA-161766535-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
     <Router history={history}>
      <Navbar />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/not-found" component={NotFound} />
         <Route path="/state/:id" component={State} />
         <Route path="/:url/:district" component={City} />
         <Route path="/states" component={States} />
         <Route path="/ip" component={IP} />
         <Redirect to="/not-found" />
        </Switch>
     </Router>
    </>
  );
}

export default App;
