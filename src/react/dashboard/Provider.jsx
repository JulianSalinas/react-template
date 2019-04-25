import PropTypes from "prop-types"
import { Children, Component } from "react";
import DashboardTypes from "../../constants/types/OptionsTypes"


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