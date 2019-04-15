import React from "react";
import PropTypes from "prop-types";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";

import MomentUtils from "@date-io/moment";
import DashboardTypes from "./Types"
import DashboardDrawer from "./Drawer"
import Provider from "./Provider"
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

const Layout = props =>
    <Provider dashboard={{...props}}>
        <DashboardLayoutWithTheme {...props}/>
    </Provider>;

Layout.propTypes = {
    ...DashboardTypes,
    drawerTheme: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
