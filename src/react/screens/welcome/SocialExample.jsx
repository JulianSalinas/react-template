import PropTypes from "prop-types";
import React, { Component } from "react";
import SocialMedia from "../../components/social-media/SocialMedia";


export default class SocialExample extends Component {

    render() {
        return (
            <div style={{
                height: "100vh",
                display: "flex",
                overflowX: "hidden",
                flexDirection: "column",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
                // backgroundImage: `url(${require("../../../assets/images/img-totoro.jpg")})`,
            }}>
                <div style={{
                    flex: 1,
                    // backgroundColor: "rgba(0, 150, 136, 0.6)"
                }}/>
                <SocialMedia/>
            </div>
        );
    }

}
