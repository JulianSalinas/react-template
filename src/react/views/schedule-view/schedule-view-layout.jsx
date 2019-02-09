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
        isOpen={props.openEvent === index}
        isSelected={props.selectedEvent === index} {...props}/>
});

const EventGrid = props =>
    <Grid container spacing={16}>
        <EventAdd index={-1} isOpen={props.openEvent === -1} {...props}/>
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
    openEvent: EventTypes,
    selectedEvent: EventTypes,
    events: PropTypes.array.isRequired,
    setOpenEvent: PropTypes.func.isRequired,
    setSelectedEvent: PropTypes.func.isRequired,
};

export default ScheduleLayout;

