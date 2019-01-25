import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./dashboard-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import DrawerManager from "../views/drawer-manager";

import DrawerMinion from "../drawers/drawer-minion";
import DrawerClipped from "../drawers/drawer-clipped";
import DrawerPermanent from "../drawers/drawer-permanent";
import DrawerResponsive from "../drawers/drawer-responsive";
import DrawerPersistentLeft from "../drawers/drawer-persistent-left";
import DrawerPersistentRight from "../drawers/drawer-persistent-right";


const DashboardLayout = props => {
    return (
        props.drawerType === 0 ? <DrawerClipped {...props}/>:
        props.drawerType === 1 ? <DrawerMinion {...props}/>:
        props.drawerType === 2 ? <DrawerPermanent {...props}/>:
        props.drawerType === 3 ? <DrawerPersistentLeft {...props}/>:
        props.drawerType === 4 ? <DrawerPersistentRight {...props}/>:
        props.drawerType === 5 ? <DrawerResponsive {...props}/>: null
    );
};

class Dashboard extends Component {

    state= {
        drawerType: 3
    };

    changeStyle = style => {
        this.setState({ drawerType: style })
    };

    createDrawerManager = () =>
        <DrawerManager
            changeStyle={this.changeStyle}
            drawerType={this.state.drawerType}/>;

    render() {
        return <DashboardLayout
            drawerManager={this.createDrawerManager()}
            drawerType={this.state.drawerType} {...this.props}/>;
    }

}

Dashboard.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired
    })
};

export default withStyles(styles)(Dashboard);

