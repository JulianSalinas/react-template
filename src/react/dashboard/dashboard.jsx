import React, { Component } from "react";

import styles from "./dashboard-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import DashboardLayout from "./dashboard-layout"

import defaults from "../drawers/drawer-defaults"
import defaultTheme from "./dashboard-theme"

import { database } from "../../js/firebase";
import { createMuiTheme } from '@material-ui/core/styles';


class Dashboard extends Component {

    state = {
        people: {},
        user: this.props.user,
        drawerType: defaults.drawerType,
        drawerWidth: defaults.drawerWidth,
        drawerAutoContrast: defaults.drawerAutoContrast,
        theme: createMuiTheme(JSON.parse(JSON.stringify(defaultTheme))),
    };

    componentDidMount(){
        database.ref("edepa6/people").on("child_added", this.personUpdated);
    }

    componentWillUnmount() {
        database.ref("edepa6/people").off();
    }

    personUpdated = snapshot => {
        let people = this.state.people;
        people[snapshot.key] = snapshot.val();
        this.setState({ people: people});
    };

    changeTheme = theme => {
        this.setState({ theme: theme })
    };

    changeDrawerType = drawerType => {
        this.setState({ drawerType: drawerType })
    };

    changeDrawerWidth = drawerWidth => {
        this.setState({ drawerWidth: drawerWidth })
    };

    changeDrawerAutoContrast = drawerAutoContrast => {
        this.setState({ drawerAutoContrast: drawerAutoContrast})
    };

    render() {
        return <DashboardLayout
            user={this.state.user}
            people={this.state.people}
            drawerTheme={this.state.theme}
            drawerType={this.state.drawerType}
            drawerWidth={this.state.drawerWidth}
            drawerAutoContrast={this.state.drawerAutoContrast}
            changeTheme={this.changeTheme}
            changeDrawerType={this.changeDrawerType}
            changeDrawerWidth={this.changeDrawerWidth}
            changeDrawerAutoContrast={this.changeDrawerAutoContrast}/>;
    }

}


export default withStyles(styles)(Dashboard);
