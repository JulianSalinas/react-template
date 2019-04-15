import PropTypes from "prop-types";
import EventTypes from "../../../constants/types/EventTypes"
import React, { Component } from "react";
import { latinise } from "../../../utils/Latinise";

import styles from "./Styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import TextField from "@material-ui/core/TextField/TextField";

import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Button from "@material-ui/core/Button/Button";
import CurtainOverlay from "../../components/curtain-overlay/CurtainOverlay";

const Window = props =>
    <img alt="img" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    }} src={props.image}/>;

Window.propTypes = {
    image: PropTypes.string
};

const Curtain = () =>
    <div style={{
        opacity: 0.7,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#212121"
    }}>
        <Button
            style={{
                color: "#FFF",
                borderColor: "#FFF"
            }}
            variant={"outlined"}
            onClick={() => console.log("Clicked")}>
            Cambiar
        </Button>
    </div>;

const EventLocationLayout = ({ classes, ...props }) =>
    <div>
        <CurtainOverlay
            height={200}
            effect={"down"}
            duration={0.4}
            curtain={<Curtain/>}
            window={<Window image={props.image}/>}
        />

        <TextField
            fullWidth
            variant="filled"
            label="Ubicación"
            id="event-location"
            onChange={props.updateEvent("location")}
            inputProps={{ className: classes.formInput}}
            value={props.event.location !== undefined ? props.event.location: ""}/>
        <FormControlLabel
            label="Imagen Automática"
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

