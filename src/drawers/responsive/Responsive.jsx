import React, { Component } from "react";

import Layout from "./Layout";
import withAppContext from "../../app/AppContext";
import withDrawerContext from "../Context";

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