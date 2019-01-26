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
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const DashboardDrawer = props => {
    return (
        props.drawerType === 0 ? <DrawerClipped/>:
        props.drawerType === 1 ? <DrawerMinion/>:
        props.drawerType === 2 ? <DrawerPermanent/>:
        props.drawerType === 3 ? <DrawerPersistentLeft/>:
        props.drawerType === 4 ? <DrawerPersistentRight/>:
        props.drawerType === 5 ? <DrawerResponsive/>: null
    );
};

const DashboardLayout = props => {

    const data = {
        user: props.user,
        drawerType: props.drawerType,
        drawerManager: props.drawerManager
    };

    return (
        <DashboardContext.Provider value={data}>
        <MuiThemeProvider theme={props.drawerTheme}>
            <DashboardDrawer drawerType={props.drawerType}/>
        </MuiThemeProvider>
        </DashboardContext.Provider>
    );

};


class Dashboard extends Component {

    state = {
        drawerType: 0,
        user: this.props.user,
        theme: require("./dashboard-theme").default,
    };

    changeTheme = theme => {
        this.setState({ theme: theme })
    };

    changeType = drawerType => {
        this.setState({ drawerType: drawerType })
    };

    render() {
        return <DashboardLayout
            user={this.state.user}
            drawerTheme={this.state.theme}
            drawerType={this.state.drawerType}
            drawerManager={this.renderDrawerManager()}/>;
    }

    renderDrawerManager = () =>
        <DrawerManager
            changeType={this.changeType}
            changeTheme={this.changeTheme}
            drawerType={this.state.drawerType}/>;

}

Dashboard.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired
    })
};

DashboardLayout.propTypes = {
    user: PropTypes.object.isRequired,
    drawerType: PropTypes.number.isRequired,
    drawerTheme: PropTypes.object.isRequired,
    drawerManager: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
export const DashboardContext = React.createContext({});
