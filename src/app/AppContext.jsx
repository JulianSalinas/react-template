import PropTypes from "prop-types";
import React from "react";
import StoreTypes from "../models/StoreTypes";

const AppContext = Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        store: PropTypes.shape(StoreTypes)
    };

    return GetContext;

};

export default AppContext;