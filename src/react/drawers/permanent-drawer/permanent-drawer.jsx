import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import withDrawerContext from "../drawer-common/drawer-context";

import DrawerMenu from "../../views/dashboard/dashboard-menu"
import DashboardSwitch from "../../views/dashboard/dashboard-router"

function PermanentDrawer(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <DrawerMenu/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <DashboardSwitch/>
            </main>
        </div>
    );
}

export default withDrawerContext(PermanentDrawer);