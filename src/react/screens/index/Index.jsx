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
        background: Image3,
        images: [ Image1, Image2, Image3, Image4, Image5, Image6, Image7]
    };

    componentDidMount() {
        // this.interval = setInterval(this.nextBackground, 10000);
    };

    componentWillUnmount() {
        // clearInterval(this.interval);
    };

    nextBackground = () => {
        const curretImage = this.state.background;
        const currentIndex = this.state.images.indexOf(curretImage);

        this.setState(({ images }) => ({
            background: images[currentIndex === this.state.images.length - 1 ? 0 : currentIndex + 1]
        }))
    };

    changeBackground = image => {
        this.setState({ background: image });
    };

    render() {
        return <Layout {...this.state} changeBackground={this.changeBackground}/>;
    }

}

export default Index;

