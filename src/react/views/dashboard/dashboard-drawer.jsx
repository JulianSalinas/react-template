import React from "react";
import PropTypes from "prop-types";

import withContext from "./dashboard-context"
import DashboardTypes from "../../../types/dashboard-types"


const DashboardDrawer = props => {
    const type = props.dashboard.drawerType;
    const Drawer = require(`../../drawers/${type}/${type}`).default;
    return <Drawer {...props}/>;
};

DashboardDrawer.propsTypes = {
    dashboard: PropTypes.shape(DashboardTypes)
};

export default withContext(DashboardDrawer);
