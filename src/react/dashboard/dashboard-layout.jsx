import React from "react";
import PropTypes from "prop-types";

import styles from "./dashboard-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import DashboardTypes from "./dashboard-types"
import DashboardDrawer from "./dashboard-drawer"
import DashboardProvider from "./dashboard-provider"
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";


const DashboardLayoutWithTheme = props =>
    <MuiThemeProvider theme={props.drawerTheme}>
        <DashboardDrawer/>
    </MuiThemeProvider>;

const DashboardLayout = props =>
    <DashboardProvider info={{...props}}>
        <DashboardLayoutWithTheme {...props}/>
    </DashboardProvider>;

DashboardLayout.propTypes = {
    ...DashboardTypes,
    drawerTheme: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardLayout);
