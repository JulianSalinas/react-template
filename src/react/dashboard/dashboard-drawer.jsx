import React from "react";
import PropTypes from "prop-types";

import withContext from "./dashboard-context"
import DashboardTypes from "./dashboard-types"


const DashboardDrawer = props => {
    const Drawer = require(`../drawers/${props.dashboard.drawerType}`).default;
    return <Drawer {...props}/>;
};

DashboardDrawer.propsTypes = {
    dashboard: PropTypes.shape(DashboardTypes)
};

export default withContext(DashboardDrawer);
