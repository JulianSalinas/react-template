import PropTypes from "prop-types";
import EventTypes from "./event-types"
import React, { Component } from "react";

import styles from "./schedule-view-styles"
import withStyles from "@material-ui/core/styles/withStyles";

import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import TextField from "@material-ui/core/TextField/TextField";
import ImageWithOverlay from "../../components/image-with-overlay";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";


const EventLocationLayout = ({ classes, ...props }) =>
    <div>
        <ImageWithOverlay src={require("../../../assets/img-material.png")}/>
        <TextField
            id="event-location"
            variant="filled"
            label="Ubicación"
            fullWidth
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
        event: this.props.event,
        image: require("../../../assets/img-material.png")
    };

    static propsTypes = {
        event: EventTypes,
        toggleAutoImage: PropTypes.func.isRequired
    };

    render() {
        return <EventLocationLayout image={this.state.image} {...this.props}/>
    }

}

export default withStyles(styles)(EventLocation);

