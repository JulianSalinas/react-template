import React from "react";
import PropTypes from "prop-types";
import DashboardTypes from "../../constants/types/DashboardTypes"


export default Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        dashboard: PropTypes.shape(DashboardTypes)
    };

    return GetContext;
};