import React, { Component } from "react";

import Layout from "./Layout";
import Image1 from "../../../assets/backgrounds/img-hachikuchi.jpg";
import Image2 from "../../../assets/backgrounds/img-spin.png";
import Image3 from "../../../assets/backgrounds/img-kimono.jpg";
import Image4 from "../../../assets/backgrounds/img-nobu.jpg";
import Image5 from "../../../assets/backgrounds/img-reimu.jpg";
import Image6 from "../../../assets/backgrounds/img-material.png";
import Image7 from "../../../assets/backgrounds/img-totoro.jpg";


class Index extends Component {

    state = {
        currentBackgroundIndex: 2,
        backgrounds: [ Image1, Image2, Image3, Image4, Image5, Image6, Image7]
    };

    componentDidMount() {
        this.interval = setInterval(this.nextBackground, 8000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    currentBackground = () => {
        const index = this.state.currentBackgroundIndex;
        return this.state.backgrounds[index];
    };

    nextBackground = () => {
        const index = this.state.currentBackgroundIndex;
        const nBackgrounds = this.state.backgrounds.length;
        this.setState(() => ({
            currentBackgroundIndex: index === nBackgrounds - 1 ? 0 : index + 1
        }))
    };

    changeBackground = index => {
        this.setState({ currentBackgroundIndex: index });
    };

    render() {
        return <Layout {...this.state}
                       background={this.currentBackground()}
                       changeBackground={this.changeBackground}
        />;
    }

}

export default Index;

