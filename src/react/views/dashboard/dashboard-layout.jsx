import React from "react";
import PropTypes from "prop-types";

import styles from "./dashboard-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import MomentUtils from "@date-io/moment";
import DashboardTypes from "../../../types/dashboard-types"
import DashboardDrawer from "./dashboard-drawer"
import DashboardProvider from "./dashboard-provider"
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import { MuiPickersUtilsProvider } from "material-ui-pickers";

import moment from "moment";
import "moment/locale/es";
moment.locale("es");


const DashboardLayoutWithTheme = props =>
    <MuiPickersUtilsProvider utils={MomentUtils}>
        <MuiThemeProvider theme={props.drawerTheme}>
            <DashboardDrawer/>
        </MuiThemeProvider>
    </MuiPickersUtilsProvider>;

const DashboardLayout = props =>
    <DashboardProvider dashboard={{...props}}>
        <DashboardLayoutWithTheme {...props}/>
    </DashboardProvider>;

DashboardLayout.propTypes = {
    ...DashboardTypes,
    drawerTheme: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardLayout);
