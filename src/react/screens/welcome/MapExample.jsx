import PropTypes from "prop-types";
import React, { Component } from "react";

import ModernMap from "../../components/modern-map/CountryMap";

export default class MapExample extends Component {

    render() {
        return (
            <div style={{
                height: "100vh",
                display: "flex",
                overflowX: "hidden",
                padding: 16
            }}>
                <ModernMap/>
            </div>
        );
    }

}
