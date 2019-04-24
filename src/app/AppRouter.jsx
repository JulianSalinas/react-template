import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Index from "../react/screens/index/Index";
import Dashboard from "../react/dashboard/Dashboard";

const NotFound = () => {
    return <div> Not Found </div>;
};

const AppRouter = () =>
    <Switch>
        {/*<Redirect exact path={"/"} to={"/dashboard/welcome"}/>*/}
        <Redirect exact path={"/"} to={"/index"}/>
        <Route path={"/dashboard"} component={Dashboard}/>
        <Route path={"/index"} component={Index}/>
        <Route component={NotFound}/>
    </Switch>;

export default AppRouter;