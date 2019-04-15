import React from 'react';

import { NavLink, withRouter } from "react-router-dom"
import Routes from "./Routes"

import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";


const DashboardMenuIcon = props =>
    typeof props.icon === "string" ?
        <img src={props.icon} alt="img" width={24} height={24} /> :
        <props.icon/>;

const DashboardMenuIconItem = props =>
    <ListItemIcon>
        <DashboardMenuIcon icon={props.icon}/>
    </ListItemIcon>;

const DashboardMenuLink = props =>
    <ListItem>
        <DashboardMenuIconItem {...props}/>
        <ListItemText primary={props.name}/>
    </ListItem>;

const Menu = props => Routes.map((route, index) => route.redirect ? null :
    <NavLink key={index}
             to={`${props.match.url}${route.path}`}
             className={props.classes !== undefined ? props.classes.item : null}
             activeClassName={props.classes !== undefined ? props.classes.itemActive : null}>
        <DashboardMenuLink
            name={route.name}
            icon={route.icon} {...props}/>
    </NavLink>
);

const DashboardMenuList = props =>
    <List>
        <Menu {...props}/>
    </List>;

export default withRouter(DashboardMenuList);