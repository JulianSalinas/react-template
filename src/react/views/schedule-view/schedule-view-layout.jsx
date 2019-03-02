import React from "react";
import PropTypes from "prop-types"

import EventAdd from "./event-add";
import EventItem from "./event-item";
import ScheduleSearch from "./schedule-view-search";

import Grid from "@material-ui/core/Grid/Grid";
import Switch from "@material-ui/core/Switch/Switch";
import Typography from "@material-ui/core/Typography/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";


const EventList = props => Object.keys(props.database.events).map((key, index) =>
    <EventItem
        key={key}
        index={index}
        eventKey={key}
        event={props.database.events[key]}
        isOpen={index === props.openItem} {...props}/>
);

const EventGrid = props =>
    <Grid container spacing={16}>
        <EventAdd
            index={-1}
            isOpen={-1 === props.openItem} {...props}/>
        <EventList {...props}/>
    </Grid>;

const KeepSynchSwitch = props =>
    <Switch
        color="secondary"
        checked={props.keepSynch}
        onChange={props.toggleKeepSynch}/>;

const ScheduleLayout = props =>
    <Grid container spacing={16}>
        <Grid item xs={12}>
            <Typography variant={"h5"}>
                Eventos
            </Typography>
            <FormControlLabel
                label="Keep events synchronized"
                control={ <KeepSynchSwitch {...props}/> }/>
            <ScheduleSearch/>
        </Grid>
        <Grid item xs={12}>
            <EventGrid {...props}/>
        </Grid>
    </Grid>;

ScheduleLayout.propsTypes = {
    openItem: PropTypes.number.isRequired,
    keepSynch: PropTypes.bool.isRequired,
    setOpenItem: PropTypes.func.isRequired,
    toggleKeepSynch: PropTypes.func.isRequired,
};

export default ScheduleLayout;

