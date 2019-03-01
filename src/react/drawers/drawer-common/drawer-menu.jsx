import React from 'react';
import { NavLink } from "react-router-dom"
import Routes from "../../views/dashboard-view/dashboard-routes"

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

const DrawerMenu = props => Routes.map((route, index) => route.redirect ? null :
    <NavLink key={index}
             to={route.path}
             className={props.classes !== undefined ? props.classes.item : null}
             activeClassName={props.classes !== undefined ? props.classes.itemActive : null}>
        <DrawerMenuLink
            name={route.name}
            icon={route.icon} {...props}/>
    </NavLink>
);

const DrawerMenuList = props =>
    <List>
        <DrawerMenu {...props}/>
    </List>;

export default DrawerMenuList