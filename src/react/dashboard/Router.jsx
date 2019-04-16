import React from 'react';
import Routes from "./Routes"
import { Route, Redirect, Switch, withRouter } from "react-router-dom"


const DashboardRoutes = ({ match }) => Routes.map((prop, key) =>
    <Route
        path={`${match.path}${prop.path}`}
        component={prop.component} key={key}/>);

const Router = props =>
    <Switch>
        <Redirect exact from={props.match.path} to={`${props.match.path}/manager`}/>
        <DashboardRoutes {...props}/>
    </Switch>;

export default withRouter(Router)