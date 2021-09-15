import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "../dashboard/Dashboard";
import React from "react";

const NotFound = () => {
    return <div> Not Found </div>;
};

const AppRouter = () =>
    <Switch>
        <Redirect exact path={"/"} to={"/index"}/>
        <Redirect exact path={"/index"} to={"/dashboard/welcome"}/>
        <Redirect exact path={"/dashboard"} to={"/dashboard/welcome"}/>
        <Route path={"/dashboard"} component={Dashboard}/>
        <Route component={NotFound}/>
    </Switch>;

export default AppRouter;