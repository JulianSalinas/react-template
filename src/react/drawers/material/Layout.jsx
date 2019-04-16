import React from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import DrawerMenu from "../../dashboard/Menu"
import DashboardSwitch from "../../dashboard/Router"
import withDrawerContext from "../Context";


const Layout = ({ classes, ...props }) =>

    <div className={classes.root}>
        <CssBaseline/>
        <AppBar
            position={"fixed"}
            className={classes.appBar}>

            <Toolbar disableGutters={true}>
                <IconButton
                    color={"inherit"}
                    aria-label={"Open drawer"}
                    onClick={props.toggleDrawerState}
                    className={classes.menuButton}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant={"h6"} color={"inherit"} noWrap>
                    MENU
                </Typography>
            </Toolbar>

        </AppBar>

        <Drawer
            open={props.open}
            variant="permanent"

            className={classNames(classes.drawer, {
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }),
            }}>

            <div style={{ height: 64 }}/>
            <DrawerMenu classes={classes}/>

        </Drawer>

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <DashboardSwitch/>
        </main>

    </div>;

export default Layout;