import React from "react";
import DrawerMenu from "../DrawerMenu";
import DashboardRouter from "../../dashboard/Router";

import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";

import withDrawerContext from "../Context";
import Images from "../../../constants/lists/Images";


const Layout = ({ classes, theme, ...props}) =>

    <div className={classes.root}>
        <CssBaseline/>

        <AppBar position={"fixed"} className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color={"inherit"}
                    aria-label={"Open drawerPaper"}
                    className={classes.menuButton}
                    onClick={props.toggleDrawerState}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>

        <nav className={classes.navigation}>

            <Hidden mdUp implementation={"css"}>
                <Drawer
                    anchor={"left"}
                    variant={"temporary"}
                    open={props.open}
                    onClose={props.toggleDrawerState}
                    classes={{ paper: classes.drawerPaper }}>
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
                    classes={{ paper: classes.drawerPaper }}>
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
            <DashboardRouter/>
        </main>

        <div className={classes.footer}/>

    </div>;

export default withDrawerContext(Layout);