import PropTypes from "prop-types"
import DashboardTypes from "./dashboard-types"
import { Children, Component } from "react";


class DashboardProvider extends Component {

    getChildContext() {
        return { dashboard: this.props.info }
    }

    render() {
        return Children.only(this.props.children)
    }
}

DashboardProvider.childContextTypes = {
    dashboard: PropTypes.shape(DashboardTypes)
};

export default DashboardProvider;