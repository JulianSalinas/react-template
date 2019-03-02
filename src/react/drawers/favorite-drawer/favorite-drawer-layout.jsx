import React from "react"
import DrawerMenu from "../../views/dashboard/dashboard-menu"
import DashboardSwitch from "../../views/dashboard/dashboard-router"

import classNames from "classnames"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import CssBaseline from "@material-ui/core/CssBaseline"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"


const FavoriteDrawerLayout = ({ classes, ...props }) =>
    <div className={classes.root}>

        <CssBaseline />
        <Drawer
            open={props.open}
            variant="permanent"

            className={classNames(classes.drawer, {
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            })}

            classes={{
                paper: classNames(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }),
            }}>

            <div className={classes.iconOpen}>
                <IconButton onClick={props.toggleDrawerState}>
                    {props.open ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
                </IconButton>
            </div>

            <Divider/>
            <DrawerMenu classes={classes}/>

        </Drawer>

        <main className={classes.content}>
            <DashboardSwitch/>
        </main>

    </div>;


export default FavoriteDrawerLayout;