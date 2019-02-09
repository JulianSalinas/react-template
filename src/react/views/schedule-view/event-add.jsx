import PropTypes from "prop-types"
import React, { Component } from "react";

import classNames from "classnames";
import styles from "./schedule-view-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import EventForm from "./event-form";
import Icon from "@material-ui/core/Icon/Icon";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";


const AddEventButton = ({ classes }) =>
    <div className={classes.addButton}>
        <Icon className={classes.addIcon}>add</Icon>
    </div>;

const AddEventShape = props => props.isOpen ?
    <EventForm {...props}/> :
    <AddEventButton {...props}/>;

const AddEventPaper = ({ classes, ...props }) =>
    <Paper className={classNames(classes.eventPaper, {
        [classes.eventOpened]: props.isOpen,
        [classes.eventClosed]: !props.isOpen
    })} elevation={0}>
        <AddEventShape classes={classes} {...props}/>
    </Paper>;

const AddEventLayout = ({ classes, ...props }) =>
    <Grid
        item xs={12}
        sm={props.isOpen ? 12: 6}
        md={props.isOpen ? 12: 4}
        lg={props.isOpen ? 9: 3}
        onClick={props.isOpen ? null : props.setOpen}
        className={classes.formGrid}>
        <AddEventPaper classes={classes} {...props}/>
    </Grid>;

class EventAdd extends Component {

    state = {
        event: {},
        isOpen: false
    };

    static propsTypes ={
        classes: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired,
        setOpenEvent: PropTypes.func.isRequired,
    };

    setOpen = () => {
        this.props.setOpenEvent(this.props.index)
    };

    render () {
        return <AddEventLayout
            setOpen={this.setOpen}
            event={this.state.event} {...this.props}/>;
    }

}


export default withStyles(styles)(EventAdd);

