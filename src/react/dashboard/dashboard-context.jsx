import React from "react";
import PropTypes from "prop-types";
import DashboardTypes from "./dashboard-types"


const withContext = Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        dashboard: PropTypes.shape(DashboardTypes)
    };

    return GetContext;
};

export default withContext;