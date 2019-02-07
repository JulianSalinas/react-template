import React from "react";

import EventItem from "./event-item";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

import styles from "./schedule-view-styles"
import withStyles from "@material-ui/core/styles/withStyles";


const EventsItem = props =>
    <Grid
        item xs={12} sm={6} md={4} lg={3}
        className={props.classes.event}
        onMouseEnter={() => props.scheduleEventClicked(props.index)}
        onMouseLeave={() => props.scheduleEventClicked(props.index)}>
        <EventItem {...props}/>
    </Grid>;

const EventsList = props => props.events.map((event, index) => {
    return <EventsItem
        key={event.key}
        index={index}
        event={event}
        isSelected={props.selected === event} {...props}/>
});

const EventsGrid = props =>
    <Grid container spacing={16}>
        <EventsList {...props}/>
    </Grid>;

const ScheduleLayout = props =>
    <div>
        <Typography variant={"h5"} paragraph>
            Eventos
        </Typography>
        <Typography variant={"h6"} paragraph>
            {
                props.selected === null ? "No event selected" : props.selected.id
            }
        </Typography>
        <EventsGrid {...props}/>
    </div>;

export default withStyles(styles)(ScheduleLayout);

