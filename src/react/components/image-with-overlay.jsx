import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./image-with-overlay-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import PlayCircle from "@material-ui/icons/PlayCircleFilledWhite"


const ImageOverlayContent = props =>
    <Grid item xs={12}>
        <Grid container justify={"center"}>
            <PlayCircle className={props.classes.playIcon}/>
        </Grid>
        {/*<Typography variant={"inherit"} color={"inherit"} align={"center"}>*/}
            {/*Descripción descriptiva*/}
        {/*</Typography>*/}
    </Grid>;

const ImageOverlay = props =>
    <Grid container
          alignItems={"center"}
          className={`${props.classes.overlay} ${props.classes.content}`}>
        <ImageOverlayContent {...props}/>
    </Grid>;

const CompleteOverlay = props =>
    <div className={props.classes.overlay}>
        <div className={`${props.classes.overlay} ${props.classes.background}`}/>
        <ImageOverlay {...props}/>
    </div>;

const ImageWithOverlayLayout = props =>
    <div className={props.classes.container}>
        <img className={props.classes.image} src={props.src}/>
        { props.showOverlay ? <CompleteOverlay {...props}/> : null }
    </div>;

class ImageWithOverlay extends Component {
    render() {
        return <ImageWithOverlayLayout {...this.props}/>
    }
}

ImageWithOverlay.propTypes = {
    src: PropTypes.string.isRequired,
    showOverlay: PropTypes.bool.isRequired
};

export default withStyles(styles)(ImageWithOverlay);