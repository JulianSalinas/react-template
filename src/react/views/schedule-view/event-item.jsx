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
            <Grid
                item xs={12}
                lg={props.isOpen ? 9: 12}>
                <EventItemPaper classes={classes} {...props}/>
            </Grid>
        </Grid>
    </Grid>;

class EventItem extends Component {

    static propsTypes ={
        event: EventTypes,
        index: PropTypes.number.isRequired,
        classes: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        setOpenEvent: PropTypes.func.isRequired,
        setSelectedEvent: PropTypes.func.isRequired,
    };

    toggleOpen = () => {
        this.props.setOpenEvent(this.props.index)
    };

    setSelected = () => {
        this.props.setSelectedEvent(this.props.index)
    };

    render () {
        return <EventItemLayout
            toggleOpen={this.toggleOpen}
            setSelected={this.setSelected} {...this.props}/>;
    }

}

export default withStyles(styles)(EventItem);

