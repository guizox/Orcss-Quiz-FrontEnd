import React from "react";
import Loadable from "react-loadable";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Skeleton from "../../skeleton";

const home = Loadable({
  loader: () => import("../../home"),
  loading: () => <div>Loading...</div>
});

const questions = Loadable({
  loader: () => import("../../questions"),
  loading: () => <div>Loading...</div>
});

const Auth = () => (
  <Router>
    <Skeleton>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/questions" component={questions} />
      </Switch>
    </Skeleton>
  </Router>
);

export default Auth;
