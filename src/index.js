import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Home from "Home";
import Analyse from "Analyse";
import Team from "Team";
import ContactUs from "ContactUs";
import Notes from "Notes";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Route path="/notes" render={(props) => <Notes {...props} />} />
      <Route path="/analyse" render={(props) => <Analyse {...props} />} />
      <Route path="/team" render={(props) => <Team {...props} />} />
      <Route path="/contactUs" render={(props) => <ContactUs {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);

serviceWorkerRegistration.register();

