import { NavLink, withRouter } from "react-router-dom";

import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import React from 'react';
import Routes from "../dashboard/Routes";
import Typography from "@material-ui/core/Typography/Typography";

const MenuIcon = props =>
    typeof props.icon === "string" ?
        <img src={props.icon} alt="img" width={24} height={24} /> :
        <props.icon/>;

const MenuIconItem = props =>
    <ListItemIcon className={props.classes !== undefined ? props.classes.itemIcon : null}>
        <MenuIcon icon={props.icon}/>
    </ListItemIcon>;

const MenuLink = props =>
    <ListItem>
        <MenuIconItem {...props}/>
        <Typography className={props.classes !== undefined ? props.classes.itemText : null}>
            { props.name }
        </Typography>
    </ListItem>;

const DrawerMenu = props => Routes.map((route, index) => route.redirect ? null :
    <NavLink key={index}
             to={route.path}
             className={props.classes !== undefined ? props.classes.item : null}
             activeClassName={props.classes !== undefined ? props.classes.itemActive : null}>
        <MenuLink
            name={route.name}
            icon={route.icon} {...props}/>
    </NavLink>
);

const MenuList = props =>
    <List>
        <DrawerMenu {...props}/>
    </List>;

export default withRouter(MenuList);