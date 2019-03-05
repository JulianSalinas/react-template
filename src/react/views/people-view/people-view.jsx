import React, { Component } from "react";
import PropTypes from "prop-types"

import withAppContext from "../../../controller/app-context";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import {withStyles} from "@material-ui/core";
import styles from "./people-view-styles";
import Avatar from "@material-ui/core/Avatar/Avatar";
import { formatTitle } from "../../../utils/utils-strings";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";

const materialColors = require("../../../json/material");

function hashCode(key){
    let hash = 0, i, chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
        chr   = key.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}

function randomColor(key){
    const value = Math.abs(hashCode(key));
    return materialColors.length > 0 ? materialColors[value % materialColors.length] : 0;
}

const PersonItemLayout = ({ classes, ...props }) =>
    <Grid
        item xs={12} sm={12} md={6} lg={4}
        onMouseEnter={props.setSelected(true)}
        onMouseLeave={props.setSelected(false)}>
        <Paper className={classes.personPaper} elevation={0}>
            <Grid container spacing={16} alignItems={"center"}>
                <Grid item>
                    <Avatar
                        className={classes.bigAvatar}
                        style={{ backgroundColor: randomColor(props.person.completeName) }}>
                        {props.person.completeName[0]}
                    </Avatar>
                </Grid>
                <Grid item style={{ flex: 1 }}>
                    <Grid container spacing={16}>
                        <Grid item xs={10}>
                            <Typography variant={"subtitle2"}>
                                {formatTitle(props.person.completeName)}
                            </Typography>
                            <Typography variant={"body2"}>
                                {formatTitle(props.person.personalTitle)}
                            </Typography>
                            {
                                props.person.about !== undefined ?
                                    props.person.about.length < 50 ?
                                        <Typography variant={"body2"}>
                                            {formatTitle(props.person.about)}
                                        </Typography> :
                                        <Grid container>
                                            <div className={ classNames(
                                                classes.personDescription,
                                                classes.personDescriptionPresent)}>
                                                DESCRIPCIÓN
                                            </div>
                                        </Grid> :
                                        <Grid container>
                                            <div className={classNames(
                                                classes.personDescription,
                                                classes.personDescriptionEmpty)}>
                                                SIN DESCRIPCIÓN
                                            </div>
                                        </Grid>
                            }
                        </Grid>
                        <Grid container justify={"flex-end"} alignItems={"center"} xs={2}>
                            <IconButton onClick={() => console.log("more options")}>
                                <Icon>more_vert</Icon>
                            </IconButton>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

class PersonItem extends Component {

    state = {
        isSelected: false
    };

    setSelected = selected => () => {
        this.setState({ isSelected: selected });
    };

    render() {
        return (
            <PersonItemLayout {...this.props}
                              isSelected={this.state.isSelected}
                              setSelected={this.setSelected}
            />
        );
    }

}

PersonItem.propTypes = {
    person: PropTypes.object.isRequired
};

const PeopleGrid = props =>
    <Grid container spacing={16}>
        {
            Object.keys(props.database.people).map((key, index) => {
                return (
                    <PersonItem {...props} key={key} index={index} person={props.database.people[key]}/>
                )
            })
        }
    </Grid>;

class PeopleView extends Component {

    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Typography variant={"h5"}>
                        Expositores
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <PeopleGrid {...this.props}/>
                </Grid>
            </Grid>
        );
    }

}
export default withStyles(styles)(withAppContext(PeopleView));

