import PropTypes from "prop-types"
import EventTypes from "../../../constants/types/EventTypes"
import React, { Component } from "react";

import classNames from "classnames";
import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";

import EventForm from "./Form";
import EventPreview from "./Preview";
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
        onMouseEnter={props.setSelected(true)}
        onMouseLeave={props.setSelected(false)}>
        <Grid container>
            <Grid item xs={12} lg={props.isOpen ? 9: 12}>
                <EventItemPaper classes={classes} {...props}/>
            </Grid>
        </Grid>
    </Grid>;

class Item extends Component {

    state = {
        isSelected: false,
        isQRVisible: false
    };

    toggleOpen = () => {
        if (this.props.isOpen) this.setSelected();
        this.props.setOpenItem(this.props.index)
    };

    toggleQRVisibility = () => {
        this.setState({ isQRVisible: !this.state.isQRVisible });
    };

    updateEvent = (prop, value) => {
        const event = this.props.event;
        const eventKey = this.props.eventKey;
        event[prop] = value;
        this.props.store.updateEvent(eventKey, event, this.props.keepSynch);
    };

    deleteEvent = () => {
        const eventKey = this.props.eventKey;
        this.props.store.deleteEvent(eventKey);
    };

    submitEvent = () => {
        const eventKey = this.props.eventKey;
        this.props.store.updateEvent(eventKey, this.props.event);
    };

    setSelected = isSelected => () => {
        this.setState({ isSelected: isSelected });
    };

    render () {
        return <EventItemLayout
            {...this.props}
            toggleOpen={this.toggleOpen}
            updateEvent={this.updateEvent}
            deleteEvent={this.deleteEvent}
            submitEvent={this.submitEvent}
            setSelected={this.setSelected}
            isSelected={this.state.isSelected}
            toggleQRVisibility={this.toggleQRVisibility}
            isQRVisible={this.state.isQRVisible}
        />;
    }

}

Item.propsTypes = {
    event: EventTypes.isRequired,
    eventKey: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setOpenItem: PropTypes.func.isRequired,
    keepSynch: PropTypes.bool.isRequired
};

export default withStyles(styles)(Item);

