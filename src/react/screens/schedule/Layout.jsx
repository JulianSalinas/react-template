import React from "react";
import PropTypes from "prop-types"

import EventAdd from "./Add";
import EventItem from "./Item";
import ScheduleSearch from "./Search";

import Grid from "@material-ui/core/Grid/Grid";
import Switch from "@material-ui/core/Switch/Switch";
import Typography from "@material-ui/core/Typography/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import { withTheme } from '@material-ui/core/styles';

const EventList = props => Object.keys(props.store.events).map((key, index) =>
    <EventItem
        key={key}
        index={index}
        eventKey={key}
        event={props.store.events[key]}
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
        color={"primary"}
        checked={props.keepSynch}
        onChange={props.toggleKeepSynch}/>;

const KeepSynchText = props =>
    <div>
        Keep events synchronized ({props.keepSynch ? "Activado" : "Desactivado"})
    </div>;

const ScheduleLayout = ({ theme, ...props }) =>
    <div style={{
        overflowX: "hidden"
    }}>
        <div style={{
            height: 240,
            padding: 16,
            backgroundColor: "#F5F5F5",
        }}/>
        <Grid container spacing={16} style={{
            paddingLeft: 16,
            paddingRight: 16,
            transform: "translateY(-224px)",
        }}>
            <Grid item xs={12}>
                <Typography variant={"h5"}>
                    Eventos
                </Typography>
                <FormControlLabel
                    label={ <KeepSynchText {...props}/> }
                    control={ <KeepSynchSwitch {...props}/> }
                />
                <ScheduleSearch/>
            </Grid>
            <Grid item xs={12}>
                <EventGrid {...props}/>
            </Grid>
        </Grid>
    </div>;

ScheduleLayout.propsTypes = {
    openItem: PropTypes.number.isRequired,
    keepSynch: PropTypes.bool.isRequired,
    setOpenItem: PropTypes.func.isRequired,
    toggleKeepSynch: PropTypes.func.isRequired,
};

export default withTheme()(ScheduleLayout);

