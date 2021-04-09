import React from "react";
import LandingPage from "../Pages/LandingPage/LandingPage";
import GitProfile from "../Pages/GitProfile/GitProfile";
import { BrowserRouter, Switch, Route} from "react-router-dom";

const Router = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
        <LandingPage/>
      </Route>
      <Route exact path={"/gitprofile"}>
        <GitProfile/>
      </Route>
      <Route>
        <GitProfile/>
      </Route>
    </Switch>
  </BrowserRouter>
)};

export default Router;