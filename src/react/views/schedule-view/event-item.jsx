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
        lg={props.isOpen ? 9: 3}
        onMouseEnter={props.setSelected}
        onMouseLeave={props.setSelected}
        className={classes.formGrid}>
        <EventItemPaper classes={classes} {...props}/>
    </Grid>;

class EventItem extends Component {

    state = { isOpen: false };

    static propsTypes ={
        event: EventTypes,
        index: PropTypes.number.isRequired,
        classes: PropTypes.object.isRequired,
        isSelected: PropTypes.bool.isRequired,
        setEventSelected: PropTypes.func.isRequired
    };

    toggleIsOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    setSelected = () => {
        this.props.setEventSelected(this.props.index)
    };

    render () {
        return <EventItemLayout
            setSelected={this.setSelected}
            toggleIsOpen={this.toggleIsOpen}
            isOpen={this.state.isOpen} {...this.props}/>;
    }

}

export default withStyles(styles)(EventItem);

