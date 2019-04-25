import React, { Component } from "react";

import Layout from "./Layout";
import Image1 from "../../../assets/images/img-hachikuchi.jpg";
import Image2 from "../../../assets/images/img-spin.png";
import Image3 from "../../../assets/images/img-kimono.jpg";
import Image4 from "../../../assets/images/img-nobu.jpg";
import Image5 from "../../../assets/images/img-reimu.jpg";
import Image6 from "../../../assets/images/img-material.png";
import Image7 from "../../../assets/images/img-totoro.jpg";
import { withRouter } from "react-router-dom";

class Index extends Component {

    state = {
        isToolbarFixed: false,
        currentBackgroundIndex: 2,
        backgrounds: [ Image1, Image2, Image3, Image4, Image5, Image6, Image7]
    };

    constructor(props) {
        super(props);
        this.heroRef = React.createRef();
        this.toolbarRef = React.createRef();
    }

    componentDidMount() {
        this.interval = setInterval(this.nextBackground, 8000);
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        const scrollOffset = window.pageYOffset;
        const scrollPosition = Math.round(scrollOffset);
        this.changeToolbarPosition(scrollPosition);
    };

    changeToolbarPosition = (scrollPosition) => {

        if(!this.heroRef) return;

        const component = this.heroRef.current;
        const componentPosition = component.offsetTop + component.clientHeight;

        // For some reason an "and" doesn't work as expected
        if (scrollPosition >= componentPosition) {
            if (!this.state.isToolbarFixed){
                this.setState({isToolbarFixed: true});
                console.log("Toolbar fixed");
            }
        }

        else if (this.state.isToolbarFixed) {
            this.setState({isToolbarFixed: false});
            console.log("Toolbar free");
        }

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
                       match={this.props.match}
                       heroRef={this.heroRef}
                       toolbarRef={this.toolbarRef}
                       background={this.currentBackground()}
                       changeBackground={this.changeBackground}
        />;
    }

}

export default withRouter(Index);

