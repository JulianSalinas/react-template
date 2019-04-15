import PropTypes from "prop-types";
import EventTypes from "../../../constants/types/EventTypes"
import React, { Component } from "react";
import { latinise } from "../../../utils/Latinise";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import TextField from "@material-ui/core/TextField/TextField";

import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";


const EventLocationLayout = ({ classes, ...props }) =>
    <div>
        {/*<ImageWithOverlay src={ props.image }/>*/}
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

    require("../../../constants/lists/Locations").default.some(location => {
        const patt = new RegExp(location.regex);
        const test =  patt.exec(normalized);
        if (test !== null) selected = location.image;
        return test !== null;
    });

    return require(`../../../assets/${selected !== null ? `tec-buildings/tec_${selected}.jpg` : `img-material.png`}`);

}

class Location extends Component {

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

export default withStyles(styles)(Location);

