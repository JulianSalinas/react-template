import React from 'react';
import Routes from "../dashboard/dashboard-routes"
import { Redirect, Route, Switch } from "react-router-dom"


const DrawerRoutes = () => Routes.map((prop, key) => prop.redirect ?
    <Redirect from={prop.path} to={prop.to} key={key}/> :
    <Route path={prop.path} component={prop.component} key={key}/>
);

const DrawerSwitch = () =>
    <Switch>
        <DrawerRoutes/>
    </Switch>;

export default DrawerSwitch