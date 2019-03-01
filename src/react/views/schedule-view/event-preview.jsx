import React from "react";
import PropTypes from "prop-types"
import EventTypes from "../../../types/event-types"

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography/Typography";

import classNames from "classnames";
import styles from "./schedule-view-styles"
import { formatTitle } from "../../../utils/utils-strings";
import withStyles from "@material-ui/core/styles/withStyles";


const getEventColor = eventype =>
    eventype === "CONFERENCIA" ? "#00D084" :
    eventype === "TALLER" ? "#EB144C" :
    eventype === "PONENCIA" ? "#9C27B0" : "#FCB900";

const EventPreview = ({ classes, ...props}) =>
    <div className={classes.eventPreview}>

        <div className={ classNames(classes.eventActions, {
            [classes.eventActionsOpened]: props.isSelected,
            [classes.eventActionsClosed]: !props.isSelected,
        })} style={{ backgroundColor: getEventColor(props.event.eventype)}}>

            <IconButton className={classes.eventActionsIcon} onClick={props.toggleOpen}>
                <Icon>edit</Icon>
            </IconButton>
            <IconButton className={classes.eventActionsIcon} onClick={props.removeEvent}>
                <Icon>delete</Icon>
            </IconButton>

        </div>

        <div className={classes.eventContent}>

            <Typography variant={"subtitle2"} gutterBottom>
                {formatTitle(props.event.title)}
            </Typography>
            <Typography variant={"body2"} gutterBottom>
                {formatTitle(props.event.location)}
            </Typography>

        </div>

        <div className={ classNames(classes.eventActions, {
            [classes.eventActionsClosed]: props.isSelected,
            [classes.eventActionsOpened]: !props.isSelected,
        })}/>

    </div>;

EventPreview.propsTypes = {
    event: EventTypes,
    setOpen: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    removeEvent: PropTypes.func.isRequired
};

export default withStyles(styles)(EventPreview);

