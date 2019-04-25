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
            <div style={{
                overflowX: "hidden"
            }}>
                <div style={{
                    height: 200,
                    backgroundColor: "#F5F5F5",
                }}/>
                <Grid container spacing={16} style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    transform: "translateY(-100px)",
                }}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <CurtainOverlay
                            duration={0.1}
                            effect={"left"}
                            curtain={<Curtain/>}
                            window={<Window image={images[0]}/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <CurtainOverlay
                            duration={0.2}
                            effect={"right"}
                            curtain={<Curtain/>}
                            borderRadius={5}
                            window={<Window image={images[1]}/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <CurtainOverlay
                            duration={0.3}
                            effect={"up"}
                            curtain={<Curtain/>}
                            borderRadius={8}
                            window={<Window image={images[2]}/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <CurtainOverlay
                            duration={1}
                            effect={"down"}
                            curtain={<Curtain/>}
                            borderRadius={25}
                            window={<Window image={images[3]}/>}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }

}
