import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import DrawerMenu from "../../views/dashboard/dashboard-menu"
import DashboardSwitch from "../../views/dashboard/dashboard-router"

import withDrawerContext from "../drawer-common/drawer-context";
export default withDrawerContext(props =>

    <div className={props.classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={props.classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Clipped drawer
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            className={props.classes.drawer}
            variant="permanent"
            classes={{
                paper: props.classes.drawerPaper,
            }}
        >
            <div className={props.classes.toolbar} />
            <DrawerMenu/>
        </Drawer>
        <main className={props.classes.content}>
            <div className={props.classes.toolbar} />
            <DashboardSwitch/>
        </main>
    </div>

);