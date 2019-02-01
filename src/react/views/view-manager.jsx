import React, { Component } from "react";

import styles from "./common-styles";
import { withTheme } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import defaultTheme from "../dashboard/dashboard-theme";
import withContext from "../dashboard/dashboard-context";
import DrawerManagerLayout from "./view-manager-layout";


class ViewManager extends Component {

    state = {
        autoContrast: true,
        drawerWidth: this.props.dashboard.drawerWidth
    };

    toggleAutoContrast = event => {
        this.setState({ autoContrast: event.target.checked });
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

    copyDefaultTheme = () => JSON.parse(JSON.stringify(defaultTheme));

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

        if (!this.state.autoContrast) {
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
            autoContrast={this.state.autoContrast}

            drawerWidth={this.state.drawerWidth}
            applyDrawerWidth={this.applyDrawerWidth}
            handleDrawerWidthChange={this.handleDrawerWidthChange}

            togglePalette={this.togglePalette}
            toggleAutoContrast={this.toggleAutoContrast}

            handleColorChange={this.handleColorChange}
            handleDrawerTypeChange={this.handleDrawerTypeChange}
            handleContrastTextChange={this.handleContrastTextChange}
            {...this.props}/>;
    }

}

const ViewManagerThemed = withStyles(styles)(withTheme()(ViewManager));
export default withContext(ViewManagerThemed);

