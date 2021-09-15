import "moment/locale/es";

import DashboardTypes from "../models/OptionsTypes";
import Drawer from "./Drawer";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import PropTypes from "prop-types";
import Provider from "./Provider";
import React from "react";
import moment from "moment";

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
