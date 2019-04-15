import PropTypes from "prop-types";
import { Children, Component } from "react";
import StoreTypes from "../constants/types/StoreTypes";


class AppProvider extends Component {

    static childContextTypes = {
        store: PropTypes.shape(StoreTypes)
    };

    getChildContext() {
        return { store: this.props.store }
    }

    render() {
        return Children.only(this.props.children)
    }

}

export default AppProvider;