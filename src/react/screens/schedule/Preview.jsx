import React from "react";
import PropTypes from "prop-types"
import EventTypes from "../../../constants/types/EventTypes"

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography/Typography";

import QRCode from 'qrcode.react';
import classNames from "classnames";
import styles from "./Styles"
import { normalize } from "../../../utils/Utils";
import withStyles from "@material-ui/core/styles/withStyles";


const getEventColor = eventype =>
    eventype === "CONFERENCIA" ? "#00D084" :
    eventype === "TALLER" ? "#EB144C" :
    eventype === "PONENCIA" ? "#9C27B0" : "#FCB900";

const Preview = ({ classes, ...props}) =>
    <div className={classes.eventPreview}>

        <div className={ classNames(classes.eventActions, {
            [classes.eventActionsOpened]: props.isSelected,
            [classes.eventActionsClosed]: !props.isSelected
        })} style={{ backgroundColor: getEventColor(props.event.eventype)}}>

            <IconButton className={classes.eventActionsIcon} onClick={props.toggleOpen}>
                <Icon>edit</Icon>
            </IconButton>
            <IconButton className={classes.eventActionsIcon} onClick={props.deleteEvent}>
                <Icon>delete</Icon>
            </IconButton>
            <IconButton className={classes.eventActionsIcon} onClick={props.toggleQRVisibility}>
                <Icon>add_to_home_screen</Icon>
            </IconButton>

        </div>

        {
            !props.isQRVisible ?
                <div className={classes.eventContent}>
                    <Typography variant={"subtitle2"} gutterBottom>
                        {normalize(props.event.title)}
                    </Typography>
                    <Typography variant={"body2"} gutterBottom>
                        {normalize(props.event.location)}
                    </Typography>
                </div>
                :
                <div className={classes.eventContent}>
                    <QRCode value={ `https://rommie.host.edepa/detail/${props.eventKey}` }/>
                </div>
        }

        <div className={ classNames(classes.eventActions, {
            [classes.eventActionsClosed]: props.isSelected,
            [classes.eventActionsOpened]: !props.isSelected,
        })}/>

    </div>;

Preview.propsTypes = {
    event: EventTypes,
    eventKey: PropTypes.string.isRequired,
    setOpen: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isQRVisible: PropTypes.bool.isRequired,
    removeEvent: PropTypes.func.isRequired
};

export default withStyles(styles)(Preview);

