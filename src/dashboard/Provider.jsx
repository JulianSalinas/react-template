import { Children, Component } from "react";

import DashboardTypes from "../models/OptionsTypes"
import PropTypes from "prop-types"

export default class Provider extends Component {

    static childContextTypes = {
        dashboard: PropTypes.shape(DashboardTypes)
    };

    getChildContext() {
        return { dashboard: this.props.dashboard }
    }

    render() {
        return Children.only(this.props.children)
    }

}