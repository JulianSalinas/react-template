import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./image-with-overlay-styles";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import AddPhotoAlternate from "@material-ui/icons/AddPhotoAlternate";


const ImageOverlayContent = props =>
    <Grid item xs={12}>
        <Grid container justify={"center"} alignItems={"center"} style={{ height: "100%"}}>
            <Grid item>
                <Grid container item xs={12} justify={"center"}>
                    <AddPhotoAlternate className={props.classes.playIcon}/>
                </Grid>
                <Grid container item xs={12} justify={"center"}>
                    <Typography variant={"button"} style={{ color: "#fff"}}>
                        CAMBIAR
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;

const ImageOverlay = props =>
    <Grid container
          className={`${props.classes.overlay} ${props.classes.content}`}>
        <ImageOverlayContent {...props}/>
    </Grid>;

const CompleteOverlay = props =>
    <div className={props.classes.overlay}>
        <div className={`${props.classes.overlay} ${props.classes.background}`}/>
        <ImageOverlay {...props}/>
    </div>;

const ImageWithOverlayLayout = props =>
    <div className={props.classes.container}
         onMouseEnter={props.toggleShowOverlay(true)}
         onMouseLeave={props.toggleShowOverlay(false)}>
        <img alt="img" className={props.classes.image} src={props.src}/>
        { props.showOverlay ? <CompleteOverlay {...props}/> : null }
    </div>;

class ImageWithOverlay extends Component {

    state = {
        showOverlay: false,
    };

    toggleShowOverlay = showOverlay => () => {
        this.setState({ showOverlay: showOverlay })
    };

    render() {
        return <ImageWithOverlayLayout
            {...this.props}
            showOverlay={this.state.showOverlay}
            toggleShowOverlay={this.toggleShowOverlay}
        />
    }
}

ImageWithOverlay.propTypes = {
    src: PropTypes.string.isRequired,
};

export default withStyles(styles)(ImageWithOverlay);