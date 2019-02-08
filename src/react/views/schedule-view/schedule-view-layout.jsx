import React from "react";
import PropTypes from "prop-types"
import EventTypes from "./event-types"

import EventAdd from "./event-add";
import EventItem from "./event-item";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";


const EventList = props => props.events.map((event, index) => {
    return <EventItem
        key={event.key}
        index={index}
        event={event}
        isSelected={props.selected === event} {...props}/>
});

const EventGrid = props =>
    <Grid container spacing={16}>
        <EventAdd {...props}/>
        <EventList {...props}/>
    </Grid>;

const ScheduleLayout = props =>
    <div>
        <Typography variant={"h5"} paragraph>
            Eventos
        </Typography>
        <EventGrid {...props}/>
    </div>;

ScheduleLayout.propsTypes = {
    selected: EventTypes,
    events: PropTypes.array.isRequired,
    setEventSelected: PropTypes.func.isRequired,
};

export default ScheduleLayout;

