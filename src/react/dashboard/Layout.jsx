import React from "react";
import PropTypes from "prop-types";

import Drawer from "./Drawer";
import Provider from "./Provider";
import MomentUtils from "@date-io/moment";
import DashboardTypes from "../../constants/types/OptionsTypes";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import { MuiPickersUtilsProvider } from "material-ui-pickers";

import moment from "moment";
import "moment/locale/es";
moment.locale("es");


const ThemedLayout = props =>
    <MuiPickersUtilsProvider utils={MomentUtils}>
        <MuiThemeProvider theme={props.drawerTheme}>
            <Drawer/>
        </MuiThemeProvider>
    </MuiPickersUtilsProvider>;

const Layout = props =>
    <Provider dashboard={{...props}}>
        <ThemedLayout {...props}/>
    </Provider>;

Layout.propTypes = {
    ...DashboardTypes,
    drawerTheme: PropTypes.object.isRequired
};

export default Layout;
