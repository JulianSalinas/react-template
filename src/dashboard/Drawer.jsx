import DashboardTypes from "../models/OptionsTypes";
import PropTypes from "prop-types";
import React from "react";
import withContext from "./Context";

const Drawer = props => {
    const type = props.dashboard.drawerType;
    const file = type[0].toUpperCase() + type.slice(1, type.length);
    const Drawer = require(`../drawers/${type}/${file}`).default;
    return <Drawer {...props}/>;
};

Drawer.propsTypes = {
    dashboard: PropTypes.shape(DashboardTypes)
};

export default withContext(Drawer);
