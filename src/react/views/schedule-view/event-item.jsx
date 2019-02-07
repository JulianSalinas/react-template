import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./event-item-styles"
import { formatTitle } from "../../../js/utils-strings";
import withStyles from "@material-ui/core/styles/withStyles";


const EventItem = ({ classes, ...props }) =>
    <Paper className={classes.paper} elevation={0}>
        <div className={classes.container}>
            <div className={classes.decoration}/>
            <div className={classes.content}>
                <Typography variant={"subtitle2"} color={"inherit"} gutterBottom>
                    {formatTitle(props.event.title)}
                </Typography>
                <Typography variant={"body2"} color={"inherit"} gutterBottom>
                    {formatTitle(props.event.location)}
                </Typography>
            </div>
        </div>
    </Paper>;


export default withStyles(styles)(EventItem);

