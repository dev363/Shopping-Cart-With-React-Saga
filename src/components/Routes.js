import React,{Fragment} from "react";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";

import Admin from "./admin/"
import Home from "./home/"

export default () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/backend" component={Admin} />
      </Switch>
    </Fragment>
  );
};
