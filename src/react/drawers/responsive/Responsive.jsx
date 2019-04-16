import React, { Component } from "react";

import Layout from "./Layout";
import withDrawerContext from "../Context";
import withAppContext from "../../../app/AppContext";


class Responsive extends Component {

    state = { open: false };

    toggleDrawerState = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return <Layout
            open={this.state.open}
            user={this.props.store.user}
            toggleDrawerState={this.toggleDrawerState} {...this.props}/>;
    }

}

export default withAppContext(withDrawerContext(Responsive));