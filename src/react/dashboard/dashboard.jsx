import React, { Component } from "react";

import styles from "./dashboard-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import DashboardLayout from "./dashboard-layout"
import DrawerManager from "../views/view-manager";

import defaultTheme from "./dashboard-theme"
import { createMuiTheme } from '@material-ui/core/styles';


class Dashboard extends Component {

    state = {
        user: this.props.user,
        drawerType: "drawer-minion",
        theme: createMuiTheme(JSON.parse(JSON.stringify(defaultTheme)))
    };

    changeTheme = theme => {
        this.setState({ theme: theme })
    };

    changeDrawerType = drawerType => {
        this.setState({ drawerType: drawerType })
    };

    render() {
        return <DashboardLayout
            user={this.state.user}
            changeTheme={this.changeTheme}
            changeDrawerType={this.changeDrawerType}
            drawerTheme={this.state.theme}
            drawerType={this.state.drawerType}
            drawerManager={<DrawerManager/>}/>;
    }

}


export default withStyles(styles)(Dashboard);
