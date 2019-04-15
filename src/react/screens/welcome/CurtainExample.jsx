import PropTypes from "prop-types";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import CurtainOverlay from "../../components/curtain-overlay/CurtainOverlay";
import images from "../../../constants/lists/Images";

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
            Guardar
        </Button>
    </div>;

export default class CurtainExample extends Component {

    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={12} sm={6} md={3}>
                    <CurtainOverlay window={<Window image={images[0]}/>} curtain={<Curtain/>} effect={"down"} duration={5}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CurtainOverlay window={<Window image={images[1]}/>} curtain={<Curtain/>} effect={"up"} duration={2}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CurtainOverlay window={<Window image={images[2]}/>} curtain={<Curtain/>} effect={"right"} duration={0.1}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CurtainOverlay window={<Window image={images[3]}/>} curtain={<Curtain/>} effect={"left"} duration={0.5}/>
                </Grid>
            </Grid>
        );
    }

}
