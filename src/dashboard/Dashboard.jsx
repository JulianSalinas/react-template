import React, { Component } from "react";

import Layout from "./Layout";
import { createMuiTheme } from '@material-ui/core/styles';
import defaultTheme from "../settings/Theme";
import options from "../settings/Options";

class Dashboard extends Component {

    state = {
        colorSet: options.colorSet,
        drawerType: options.drawerType,
        drawerWidth: options.drawerWidth,
        drawerAutoContrast: options.drawerAutoContrast,
        drawerAvatar: options.drawerAvatar,
        drawerBackground: options.drawerBackground,
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
        return <Layout
            colorSet={this.state.colorSet}
            drawerTheme={this.state.theme}
            drawerType={this.state.drawerType}
            drawerWidth={this.state.drawerWidth}
            drawerAutoContrast={this.state.drawerAutoContrast}
            drawerBackground={this.state.drawerBackground}
            drawerAvatar={this.state.drawerAvatar}
            changeTheme={this.changeTheme}
            changeColorSet={this.changeColorSet}
            changeDrawerType={this.changeDrawerType}
            changeDrawerWidth={this.changeDrawerWidth}
            changeDrawerAutoContrast={this.changeDrawerAutoContrast}/>;
    }

}


export default Dashboard;
