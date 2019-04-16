import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";

import withDrawerContext from "../Context";
import DrawerMenu from "../../dashboard/Menu"
import DashboardSwitch from "../../dashboard/Router"
import Avatar from "@material-ui/core/Avatar/Avatar";
import Divider from "@material-ui/core/Divider/Divider";
import Images from "../../../constants/lists/Images";


const Layout = ({ classes, theme, ...props}) =>

    <div className={classes.root}>
        <CssBaseline/>

        <AppBar position={"fixed"} className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color={"inherit"}
                    aria-label={"Open drawer"}
                    className={classes.menuButton}
                    onClick={props.toggleDrawerState}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>

        <nav className={classes.nav}>

            <Hidden mdUp implementation={"css"}>
                <Drawer
                    anchor={"left"}
                    variant={"temporary"}
                    open={props.open}
                    onClose={props.toggleDrawerState}
                    classes={{ paper: classes.drawer }}>
                    <div style={{
                        height: 170,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Avatar src={Images[1]} style={{
                            width: 125,
                            height: 125,
                        }}/>
                    </div>
                    <Divider variant={"fullWidth"} style={{ margin: "8px 16px" }}/>
                    <DrawerMenu classes={classes}/>
                </Drawer>
            </Hidden>

            <Hidden smDown implementation={"css"}>
                <Drawer
                    variant={"permanent"}
                    classes={{ paper: classes.drawer }}>
                    <div style={{
                        height: 170,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Avatar src={Images[1]} style={{
                            width: 125,
                            height: 125,
                        }}/>
                    </div>
                    <Divider variant={"fullWidth"} style={{ margin: "8px 16px" }}/>
                    <DrawerMenu classes={classes}/>
                </Drawer>
            </Hidden>

        </nav>

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <DashboardSwitch/>
        </main>

        <div className={classes.footer}/>

    </div>;

export default withDrawerContext(Layout);