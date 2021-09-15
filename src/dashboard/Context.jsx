import DashboardTypes from "../models/OptionsTypes"
import PropTypes from "prop-types";
import React from "react";

export default Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        dashboard: PropTypes.shape(DashboardTypes)
    };

    return GetContext;
};