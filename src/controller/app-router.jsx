import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from "../react/views/dashboard/dashboard"


const NotFound = () =>
    <div>
        Not Found
    </div>;

export default () =>
    <Switch>
        <Redirect exact path={"/"} to={"/dashboard/welcome"}/>
        <Route path={"/dashboard"} component={Dashboard}/>
        <Route component={NotFound}/>
    </Switch>;