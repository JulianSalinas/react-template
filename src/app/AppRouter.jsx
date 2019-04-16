import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "../react/dashboard/Dashboard";


const NotFound = () => {
    return <div> Not Found </div>;
};

const AppRouter = () =>
    <Switch>
        <Redirect exact path={"/"} to={"/dashboard/welcome"}/>
        <Route path={"/dashboard"} component={Dashboard}/>
        <Route component={NotFound}/>
    </Switch>;

export default AppRouter;