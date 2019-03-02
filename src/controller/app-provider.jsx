import PropTypes from "prop-types"
import { Children, Component } from "react";
import DatabaseTypes from "../types/database-types"


export default class AppProvider extends Component {

    static childContextTypes = {
        database: PropTypes.shape(DatabaseTypes)
    };

    getChildContext() {
        return { database: this.props.database }
    }

    render() {
        return Children.only(this.props.children)
    }

}