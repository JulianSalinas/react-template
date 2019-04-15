import React from "react";
import PropTypes from "prop-types";
import StoreTypes from "../constants/types/StoreTypes";


const AppContext = Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        store: PropTypes.shape(StoreTypes)
    };

    return GetContext;

};

export default AppContext;