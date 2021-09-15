import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import DashboardRouter from "../../dashboard/Router";
import Divider from "@material-ui/core/Divider/Divider";
import Drawer from "@material-ui/core/Drawer";
import DrawerMenu from "../DrawerMenu";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import withDrawerContext from "../Context";

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
                        <Avatar src={props.dashboard.drawerAvatar} style={{
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
                        <Avatar src={props.dashboard.drawerAvatar} style={{
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