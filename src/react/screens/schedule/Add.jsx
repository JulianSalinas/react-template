import PropTypes from "prop-types"
import React, { Component } from "react";

import classNames from "classnames";
import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";

import EventForm from "./Form";
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
        lg={props.isOpen ? 12: 3}
        onClick={props.isOpen ? null : props.toggleOpen}>
        <Grid container>
            <Grid item xs={12} lg={props.isOpen ? 9: 12}>
                <AddEventPaper classes={classes} {...props}/>
            </Grid>
        </Grid>
    </Grid>;

class Add extends Component {

    state = {
        end: new Date(),
        start: new Date(),
        eventype: "CONFERENCIA",
        location: "Centro de las Artes"
    };

    toggleOpen = () => {
        this.props.setOpenItem(this.props.index)
    };

    updateEvent = (prop, value) => {
        this.setState({ ...this.state, [prop]: value });
    };

    submitEvent = () => {
        this.props.store.createEvent(this.state);
    };

    render () {
        return <AddEventLayout
            {...this.props}
            event={this.state}
            toggleOpen={this.toggleOpen}
            updateEvent={this.updateEvent}
            submitEvent={this.submitEvent}/>;
    }

}

Add.propsTypes = {
    index: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setOpenItem: PropTypes.func.isRequired,
};

export default withStyles(styles)(Add);

