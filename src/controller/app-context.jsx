import React from "react";
import PropTypes from "prop-types";
import DatabaseTypes from "../types/database-types"


export default Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        database: PropTypes.shape(DatabaseTypes)
    };

    return GetContext;

};