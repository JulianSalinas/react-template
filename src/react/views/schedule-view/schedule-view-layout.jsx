import React from "react";
import PropTypes from "prop-types"

import EventAdd from "./event-add";
import EventItem from "./event-item";
import Grid from "@material-ui/core/Grid/Grid";
import Switch from "@material-ui/core/Switch/Switch";
import Typography from "@material-ui/core/Typography/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import ScheduleSearch from "./schedule-search"

const EventList = props => Object.keys(props.events).map((key, index) => {
    return props.events[key] !== undefined ? <EventItem
        id={key}
        key={key}
        index={index}
        event={props.events[key]}
        isOpen={index === props.openItem}
        isSelected={index === props.selectedItem} {...props}/> : <div key={key}/>
});

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
    events: PropTypes.object.isRequired,
    reference: PropTypes.string.isRequired,
    keepSynch: PropTypes.bool.isRequired,
    openItem: PropTypes.number.isRequired,
    selectedItem: PropTypes.number.isRequired,
    setOpenItem: PropTypes.func.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
    toggleKeepSynch: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    removeEvent: PropTypes.func.isRequired,
    submitEvent: PropTypes.func.isRequired,
};

export default ScheduleLayout;

