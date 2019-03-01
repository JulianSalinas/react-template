import PropTypes from "prop-types";
import EventTypes from "../../../types/event-types"
import React, { Component } from "react";
import latinise from "../../../utils/latinise";

import styles from "./schedule-view-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import TextField from "@material-ui/core/TextField/TextField";
import ImageWithOverlay from "../../components/image-with-overlay/image-with-overlay";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";


const EventLocationLayout = ({ classes, ...props }) =>
    <div>
        <ImageWithOverlay src={ props.image }/>
        <TextField
            fullWidth
            variant="filled"
            label="Ubicación"
            id="event-location"
            onChange={props.updateEvent("location")}
            inputProps={{ className: classes.formInput}}
            value={props.event.location !== undefined ? props.event.location: ""}/>
        <FormControlLabel
            label="Colocar imagen automáticamente"
            control={
                <Checkbox
                    checked={props.autoImage}
                    onChange={props.toggleAutoImage}/>
            }
        />
    </div>;

function getImageBasedInLocation(event){

    if (event.location === undefined || event.location === null)
        return require(`../../../assets/img-material.png`);

    const normalized = latinise(event.location.toLowerCase());
    let selected = null;

    require("../../../json/locations").some(location => {
        const patt = new RegExp(location.regex);
        const test =  patt.exec(normalized);
        if (test !== null) selected = location.image;
        return test !== null;
    });

    return require(`../../../assets/${selected !== null ? `tec_${selected}.jpg` : `img-material.png`}`);

}

class EventLocation extends Component {

    state = { image: "../../../assets/img-material.png" };

    static propsTypes = {
        event: EventTypes,
        updateEvent: PropTypes.func.isRequired,
        toggleAutoImage: PropTypes.func.isRequired
    };

    static getDerivedStateFromProps(props, state){
        if (props.autoImage) state.image = getImageBasedInLocation(props.event);
        return state;
    }

    componentDidMount() {
        this.setState({ image: getImageBasedInLocation(this.props.event) });
    }

    render() {
        return <EventLocationLayout image={this.state.image} {...this.props}/>
    }

}

export default withStyles(styles)(EventLocation);

