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
        autoContrast: true
    };

    toggleAutoContrast = event => {
        this.setState({ autoContrast: event.target.checked });
    };

    handleTypeChanged = event => {
        this.props.dashboard.changeDrawerType(event.target.value);
    };

    togglePalette = () => {
        const currentTheme = this.props.theme;
        const newTheme = JSON.parse(JSON.stringify(defaultTheme));
        newTheme.palette.primary = currentTheme.palette.primary;
        newTheme.palette.secondary = currentTheme.palette.secondary;
        newTheme.palette.type = currentTheme.palette.type === "light" ? "dark" : "light";
        this.props.dashboard.changeTheme(createMuiTheme(newTheme));
    };

    handleColorChanged = (color, prop) => {
        const currentTheme = this.props.theme;
        const newTheme = JSON.parse(JSON.stringify(defaultTheme));

        newTheme.palette.type = currentTheme.palette.type;
        newTheme.palette[prop].main = color.hex;

        const theOther = prop === "primary" ? "secondary" : "primary";
        newTheme.palette[theOther].main = currentTheme.palette[theOther].main;

        if (!this.state.autoContrast) {
            newTheme.palette.primary.contrastText = currentTheme.palette.primary.contrastText;
            newTheme.palette.secondary.contrastText = currentTheme.palette.secondary.contrastText;
        }

        this.props.dashboard.changeTheme(createMuiTheme(newTheme));
    };

    handleContrastTextChanged = (color, prop) => {
        const currentTheme = this.props.theme;
        currentTheme.palette[prop].contrastText = color.hex;
        this.props.dashboard.changeTheme(createMuiTheme(currentTheme));
    };

    render() {
        return <DrawerManagerLayout
            autoContrast={this.state.autoContrast}
            togglePalette={this.togglePalette}
            toggleAutoContrast={this.toggleAutoContrast}
            handleTypeChanged={this.handleTypeChanged}
            handleColorChanged={this.handleColorChanged}
            handleContrastTextChanged={this.handleContrastTextChanged}
            {...this.props}/>;
    }

}

const ViewManagerThemed = withStyles(styles)(withTheme()(ViewManager));
export default withContext(ViewManagerThemed);

