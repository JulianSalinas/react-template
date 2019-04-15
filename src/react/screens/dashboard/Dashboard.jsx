import React, { Component } from "react";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";
import DashboardLayout from "./Layout"

import defaults from "../../drawers/common/Defaults"
import defaultTheme from "../../../constants/main/Theme"

import { createMuiTheme } from '@material-ui/core/styles';


class Dashboard extends Component {

    state = {
        drawerType: defaults.drawerType,
        drawerWidth: defaults.drawerWidth,
        drawerAutoContrast: defaults.drawerAutoContrast,
        theme: createMuiTheme(JSON.parse(JSON.stringify(defaultTheme))),
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
