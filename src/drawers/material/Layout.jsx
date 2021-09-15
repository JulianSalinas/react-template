import React from "react";
import DrawerMenu from "../DrawerMenu";
import DashboardRouter from "../../dashboard/Router";

import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";


const Layout = ({ classes, ...props }) =>

    <div className={classes.root}>
        <CssBaseline/>
        <AppBar
            position={"fixed"}
            className={classes.appBar}>

            <Toolbar disableGutters={true}>
                <IconButton
                    color={"inherit"}
                    aria-label={"Open drawerPaper"}
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

            className={classNames(classes.drawerPaper, {
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
            <DashboardRouter/>
        </main>

    </div>;

export default Layout;