import React from 'react';
import Routes from "./Routes"
import { Route, Switch, withRouter } from "react-router-dom"


const DashboardRoutes = ({ match }) => Routes.map((prop, key) =>
    <Route
        path={prop.path}
        component={prop.component} key={key}/>);

const Router = props =>
    <Switch>
        <DashboardRoutes {...props}/>
    </Switch>;

export default withRouter(Router)