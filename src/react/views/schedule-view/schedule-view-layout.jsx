import React from "react";
import PropTypes from "prop-types"
import EventTypes from "./event-types"

import EventAdd from "./event-add";
import EventItem from "./event-item";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";


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
        <EventAdd
            index={-1}
            event={props.creatingEvent}
            isOpen={props.openEvent === -1} {...props}/>
        <EventList {...props}/>
    </Grid>;

const ScheduleLayout = props =>
    <Grid container spacing={8}>
        <Grid item xs={12}>
            <Typography variant={"h5"}>
                Eventos
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel
                control={
                    <Switch
                        color="secondary"
                        checked={props.keepSynch}
                        onChange={props.toggleKeepSynch}
                    />
                }
                label="Keep events synchronized"
            />
        </Grid>
        <Grid item xs={12}>
            <EventGrid {...props}/>
        </Grid>
    </Grid>;

ScheduleLayout.propsTypes = {
    openEvent: EventTypes,
    selectedEvent: EventTypes,
    creatingEvent: EventTypes,
    events: PropTypes.array.isRequired,
    keepSynch: PropTypes.bool.isRequired,
    setOpenEvent: PropTypes.func.isRequired,
    toggleKeepSynch: PropTypes.func.isRequired,
    setSelectedEvent: PropTypes.func.isRequired,
};

export default ScheduleLayout;

