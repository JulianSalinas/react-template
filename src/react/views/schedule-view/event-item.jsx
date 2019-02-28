import PropTypes from "prop-types"
import EventTypes from "./event-types"
import React, { Component } from "react";

import classNames from "classnames";
import styles from "./schedule-view-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import EventForm from "./event-form";
import EventPreview from "./event-preview";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";


const EventItemShape = props => props.isOpen ?
    <EventForm {...props}/> :
    <EventPreview {...props}/>;

const EventItemPaper = ({ classes, ...props }) =>
    <Paper className={ classNames(classes.eventPaper, {
        [classes.eventOpened]: props.isOpen,
        [classes.eventClosed]: !props.isOpen
    })} elevation={0}>
        <EventItemShape classes={classes} {...props}/>
    </Paper>;

const EventItemLayout = ({ classes, ...props }) =>
    <Grid
        item xs={12}
        sm={props.isOpen ? 12: 6}
        md={props.isOpen ? 12: 4}
        lg={props.isOpen ? 12: 3}
        onMouseEnter={props.setSelected}
        onMouseLeave={props.setSelected}>
        <Grid container>
            <Grid item xs={12} lg={props.isOpen ? 9: 12}>
                <EventItemPaper classes={classes} {...props}/>
            </Grid>
        </Grid>
    </Grid>;

class EventItem extends Component {

    toggleOpen = () => {
        if (this.props.isOpen) this.setSelected();
        this.props.setOpenItem(this.props.index)
    };

    updateEvent = (prop, value) => {
        const id = this.props.id;
        this.props.updateEvent(id, prop, value);
    };

    removeEvent = () => {
        const id = this.props.id;
        this.props.removeEvent(id);
    };

    submitEvent = () => {
        const id = this.props.id;
        this.props.submitEvent(id, this.props.event);
    };

    setSelected = () => {
        this.props.setSelectedItem(this.props.index)
    };

    render () {
        return <EventItemLayout
            {...this.props}
            toggleOpen={this.toggleOpen}
            updateEvent={this.updateEvent}
            removeEvent={this.removeEvent}
            submitEvent={this.submitEvent}
            setSelected={this.setSelected}/>;
    }

}

EventItem.propsTypes = {
    event: EventTypes.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    setOpenItem: PropTypes.func.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    removeEvent: PropTypes.func.isRequired,
    submitEvent: PropTypes.func.isRequired,
};

export default withStyles(styles)(EventItem);

