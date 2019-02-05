import React, { Component } from "react"
import withDrawerContext from "./drawer-context"
import FavoriteDrawerLayout from "./favorite-drawer-layout"


class FavoriteDrawer extends Component {

    state = { open: false };

    toggleDrawerState = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return <FavoriteDrawerLayout
            open={this.state.open}
            toggleDrawerState={this.toggleDrawerState} {...this.props}/>;
    }

}

export default withDrawerContext(FavoriteDrawer);