import React, { Component } from "react";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";
import DashboardLayout from "./Layout";

import options from "../../constants/main/Options";
import defaultTheme from "../../constants/main/Theme";
import { createMuiTheme } from '@material-ui/core/styles';


class Dashboard extends Component {

    state = {
        colorSet: options.colorSet,
        drawerType: options.drawerType,
        drawerWidth: options.drawerWidth,
        drawerAutoContrast: options.drawerAutoContrast,
        theme: createMuiTheme(JSON.parse(JSON.stringify(defaultTheme))),
    };

    changeTheme = theme => {
        this.setState({ theme: theme })
    };

    changeColorSet = colorSet => {
        this.setState({ colorSet: colorSet });
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
            colorSet={this.state.colorSet}
            drawerTheme={this.state.theme}
            drawerType={this.state.drawerType}
            drawerWidth={this.state.drawerWidth}
            drawerAutoContrast={this.state.drawerAutoContrast}
            changeTheme={this.changeTheme}
            changeColorSet={this.changeColorSet}
            changeDrawerType={this.changeDrawerType}
            changeDrawerWidth={this.changeDrawerWidth}
            changeDrawerAutoContrast={this.changeDrawerAutoContrast}/>;
    }

}


export default withStyles(styles)(Dashboard);
