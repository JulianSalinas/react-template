import PropTypes from "prop-types";
import EventTypes from "./event-types"
import React, { Component } from "react";
import latinise from "../../../js/latinise";

import styles from "./schedule-view-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import TextField from "@material-ui/core/TextField/TextField";
import ImageWithOverlay from "../../components/image-with-overlay";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";


const EventLocationLayout = ({ classes, ...props }) =>
    <div>
        <ImageWithOverlay src={props.image}/>
        <TextField
            id="event-location"
            variant="filled"
            label="Ubicación"
            fullWidth
            value={props.event.location}
            inputProps={{ className: classes.formInput}}/>
        <FormControlLabel
            label="Colocar imagen automáticamente"
            control={
                <Checkbox
                    checked={props.autoImage}
                    onChange={props.toggleAutoImage}/>
            }
        />
    </div>;

class EventLocation extends Component {

    state = {
        image: require("../../../assets/img-material.png")
    };

    static propsTypes = {
        event: EventTypes,
        toggleAutoImage: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.setImage(this.props.event.location);
    }

    setImage = string => {

        const normalized = latinise(string.toLowerCase());
        const locations = require("../../../json/locations");
        let selected = null;

        locations.some(location => {
            const patt = new RegExp(location.regex);
            const test =  patt.exec(normalized);
            if (test !== null) selected = location.image;
            return test !== null;
        });

        if (selected !== null) {
            this.setState({ image: require(`../../../assets/tec_${selected}.jpg`) });
        }

    };

    render() {
        return <EventLocationLayout image={this.state.image} {...this.props}/>
    }

}

export default withStyles(styles)(EventLocation);

