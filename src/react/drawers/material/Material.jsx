import React, { Component } from "react";

import Layout from "./Layout";
import withDrawerContext from "../Context";


class Favorite extends Component {

    state = { open: false };

    toggleDrawerState = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return <Layout
            open={this.state.open}
            toggleDrawerState={this.toggleDrawerState} {...this.props}/>;
    }

}

export default withDrawerContext(Favorite);