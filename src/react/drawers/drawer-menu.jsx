import React from 'react';
import { NavLink } from "react-router-dom"
import Routes from "../dashboard/dashboard-routes"

import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";


const DrawerMenuIcon = props =>
    typeof props.icon === "string" ?
        <img src={props.icon} alt="img" width={24} height={24} /> :
        <props.icon/>;

const DrawerMenuIconItem = props =>
    <ListItemIcon>
        <DrawerMenuIcon icon={props.icon}/>
    </ListItemIcon>;

const DrawerMenuLink = props =>
    <ListItem>
        <DrawerMenuIconItem {...props}/>
        <ListItemText primary={props.name}/>
    </ListItem>;

const DrawerMenuItem = props =>
    <NavLink key={props.key}
             to={props.path}>
        <DrawerMenuLink {...props}/>
    </NavLink>;

const DrawerMenu = props => Routes.map((route, key) => route.redirect ? null :
    <DrawerMenuItem
        key={key}
        path={route.path}
        name={route.name}
        icon={route.icon} {...props}/>
);

const DrawerMenuList = () =>
    <List>
        <DrawerMenu/>
    </List>;

export default DrawerMenuList