import React, { Component } from "react";
import DefaultTheme from "../../../constants/main/Theme";
import DrawerManagerLayout from "./Layout";

import { withTheme } from '@material-ui/core/styles';
import withAppContext from "../../../app/AppContext"
import withDashboardContext from "../dashboard/Context";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";


class Manager extends Component {

    state = {
        drawerWidth: this.props.dashboard.drawerWidth
    };

    toggleAutoContrast = event => {
        this.props.dashboard.changeDrawerAutoContrast(event.target.checked);
    };

    handleDrawerTypeChange = event => {
        this.props.dashboard.changeDrawerType(event.target.value);
    };

    handleDrawerWidthChange = event => {
        this.setState({ drawerWidth: parseInt(event.target.value, 10)})
    };

    applyDrawerWidth = () => {
        this.props.dashboard.changeDrawerWidth(this.state.drawerWidth);
    };

    applyTheme = theme => {
        this.props.dashboard.changeTheme(createMuiTheme(theme));
    };

    copyDefaultTheme = () => JSON.parse(JSON.stringify(DefaultTheme));

    togglePalette = () => {
        const currentTheme = this.props.theme;
        const newTheme = this.copyDefaultTheme();
        newTheme.palette.primary = currentTheme.palette.primary;
        newTheme.palette.secondary = currentTheme.palette.secondary;
        newTheme.palette.type = currentTheme.palette.type === "light" ? "dark" : "light";
        this.applyTheme(newTheme);
    };

    handleColorChange = (color, prop) => {
        const currentTheme = this.props.theme;
        const newTheme = this.copyDefaultTheme();

        newTheme.palette.type = currentTheme.palette.type;
        newTheme.palette[prop].main = color.hex;

        const theOther = prop === "primary" ? "secondary" : "primary";
        newTheme.palette[theOther].main = currentTheme.palette[theOther].main;

        if (!this.props.dashboard.drawerAutoContrast) {
            newTheme.palette.primary.contrastText = currentTheme.palette.primary.contrastText;
            newTheme.palette.secondary.contrastText = currentTheme.palette.secondary.contrastText;
        }

        this.applyTheme(newTheme);
    };

    handleContrastTextChange = (color, prop) => {
        const currentTheme = this.props.theme;
        currentTheme.palette[prop].contrastText = color.hex;
        this.applyTheme(currentTheme);
    };

    render() {
        return <DrawerManagerLayout
            {...this.props}
            drawerWidth={this.state.drawerWidth}
            applyDrawerWidth={this.applyDrawerWidth}
            togglePalette={this.togglePalette}
            toggleAutoContrast={this.toggleAutoContrast}
            handleColorChange={this.handleColorChange}
            handleDrawerTypeChange={this.handleDrawerTypeChange}
            handleDrawerWidthChange={this.handleDrawerWidthChange}
            handleContrastTextChange={this.handleContrastTextChange}/>;
    }

}

export default withTheme()(withAppContext(withDashboardContext(Manager)));

