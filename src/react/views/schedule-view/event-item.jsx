import React from "react";
import PropTypes from "prop-types"

import Icon from '@material-ui/core/Icon';
import Paper from "@material-ui/core/Paper/Paper";
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography/Typography";

import classNames from "classnames";
import styles from "./event-item-styles"
import { formatTitle } from "../../../js/utils-strings";
import withStyles from "@material-ui/core/styles/withStyles";

const getEventColor = eventype =>
    eventype === "CONFERENCIA" ? "#00D084" :
    eventype === "TALLER" ? "#EB144C" :
    eventype === "PONENCIA" ? "#9C27B0" : "#FCB900";

const EventItem = ({ classes, ...props }) =>
    <Paper className={ classNames(classes.paper, {
        [classes.selected]: props.isSelected })
    } elevation={0}>

        <div className={classes.container}>

            <div className={ classNames(classes.actionBar, {
                [classes.actionBarSelected]: props.isSelected })
            } style={{ backgroundColor: getEventColor(props.event.eventype)}}>

                <IconButton className={classes.actionBarIcon}>
                    <Icon>alarm</Icon>
                </IconButton>
                <IconButton className={classes.actionBarIcon}>
                    <Icon>edit</Icon>
                </IconButton>
                <IconButton className={classes.actionBarIcon}>
                    <Icon>delete</Icon>
                </IconButton>

            </div>

            <div className={classes.content}>

                <Typography variant={"subtitle2"} gutterBottom>
                    {formatTitle(props.event.title)}
                </Typography>
                <Typography variant={"body2"} gutterBottom>
                    {formatTitle(props.event.location)}
                </Typography>

            </div>

            <div className={ classNames(classes.hiddenSpace, {
                [classes.hiddenSpaceSelected]: props.isSelected })
            }/>

        </div>
    </Paper>;

EventItem.propsTypes = {
    event: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default withStyles(styles)(EventItem);

