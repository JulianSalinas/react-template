import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./scratchpad-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography/Typography";

import GenericClock from "../components/generic-clock";
import TwoStatesButton from "../components/two-states-button";
import ImageWithOverlay from "../components/image-with-overlay";


const ScratchpadLayout = props =>
    <div className={props.classes.layout}>
        <Grid container spacing={16}>

            <Grid item xs={12}>
                <Grid container justify={"center"}>
                    <Grid item>
                        <GenericClock/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justify={"center"}>
                    <Grid item>
                        <Avatar src={props.user.photoUrl}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justify={"center"}>
                    <Grid item xs={12}>
                        <Typography variant={"body1"} align={"center"}>
                            {props.user.username}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"body2"} align={"center"}>
                            {props.user.email}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justify={"center"} spacing={16}>
                    <Grid item xs={4}>
                        <TwoStatesButton onText={"Matriculado"} offText={"Desmatriculado"}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={16}>
                    <Grid item xs={4}>
                        <ImageWithOverlay src={require("../../assets/pattern_asphalt.jpg")}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ImageWithOverlay src={require("../../assets/pattern_blue.jpg")} showOverlay/>
                    </Grid>
                    <Grid item xs={4}>
                        <ImageWithOverlay src={require("../../assets/pattern_green.jpg")} showOverlay/>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    </div>;

class Scratchpad extends Component {

    render() {
        return <ScratchpadLayout {...this.props}/>;
    }
  
}

Scratchpad.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired
    })
};

export default withStyles(styles)(Scratchpad);