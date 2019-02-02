import React, { Component } from "react";

import styles from "./dashboard-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import DashboardLayout from "./dashboard-layout"

import defaults from "../drawers/drawer-defaults"
import defaultTheme from "./dashboard-theme"
import { createMuiTheme } from '@material-ui/core/styles';


class Dashboard extends Component {

    state = {
        user: this.props.user,
        drawerType: defaults.drawerType,
        drawerWidth: defaults.drawerWidth,
        drawerManager: defaults.drawerManager,
        drawerAutoContrast: defaults.drawerAutoContrast,
        theme: createMuiTheme(JSON.parse(JSON.stringify(defaultTheme)))
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
            drawerTheme={this.state.theme}
            drawerType={this.state.drawerType}
            drawerWidth={this.state.drawerWidth}
            drawerManager={this.state.drawerManager}
            drawerAutoContrast={this.state.drawerAutoContrast}
            changeTheme={this.changeTheme}
            changeDrawerType={this.changeDrawerType}
            changeDrawerWidth={this.changeDrawerWidth}
            changeDrawerAutoContrast={this.changeDrawerAutoContrast}/>;
    }

}


export default withStyles(styles)(Dashboard);
