import React, { Component } from "react";

import PropTypes from "prop-types";

export default class CurtainOverlay extends Component {

    state = {
        width: 0,
        height: 0,
        isOpen: false
    };

    static defaultProps = {
        height: 200,
        width: "100%",
        effect: "down",
        duration: 0.3,
        borderRadius: 0,
    };

    static propTypes = {
        width: PropTypes.any,
        height: PropTypes.any,
        window: PropTypes.node.isRequired,
        curtain: PropTypes.node.isRequired,
        effect: PropTypes.oneOf(["up", "down", "right", "left"]),
        duration: PropTypes.number,
        borderRadius: PropTypes.number
    };

    constructor(props){
        super(props);
        this.container = React.createRef();
    }

    componentDidMount(){
        this.setDimensions();
        window.addEventListener("resize", this.setDimensions, false);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.setDimensions, false)
    }

    setDimensions = () => this.setState({
        width: this.container.current.clientWidth,
        height: this.container.current.clientHeight,
    });

    setOpen = isOpen => () => {
        this.setState({ isOpen: isOpen })
    };

    isVertical = effect => {
        return effect === "up" || effect === "down";
    };

    getTransform = () => {
        const { effect } = this.props;
        const width = this.state.width;
        const height = this.state.height;
        const vertical = this.isVertical(effect);
        const dimension = vertical ? "Y" : "X";
        const distance = vertical ? height : width;
        const direction = effect === "down" || effect === "right" ? -1 : 1;
        return this.state.isOpen ? `translate${dimension}(${distance * direction}px)` : ""
    };

    getPositionStyle = () => {

        let style = {
            display: "flex",
            position: "absolute"
        };

        const map = {
            up: "bottom",
            down: "top",
            left: "right",
            right: "left"
        };

        const { effect } = this.props;
        const width = this.state.width;
        const height = this.state.height;
        let vertical = this.isVertical(effect);

        style.width = vertical ? width : width * 2;
        style.height = vertical ? height * 2: height;
        style.flexDirection = vertical ? "column" : "row";
        style[map[effect]] = 0;

        return style;

    };

    renderWindow = component =>
        <div key={0} style={{ flex: 1, height: this.props.height }}>
            { component }
        </div>;

    renderCurtain = component =>
        <div key={1} style={{
            flex: 1,
            height: this.props.height,
            position: "relative",
            transition: `${this.props.duration}s ease` ,
            transform: this.getTransform()
        }}> { component } </div>;

    renderOverlay = ({ effect, window, curtain }) =>
        effect === "up" || effect === "left" ?
            [this.renderCurtain(curtain), this.renderWindow(window)]:
            [this.renderWindow(window), this.renderCurtain(curtain)];


    render() {

        const style = {
            overflow: "hidden",
            position: "relative",
            width: this.props.width,
            height: this.props.height,
            borderRadius: this.props.borderRadius
        };

        return (
            <div ref={this.container} style={style} onMouseEnter={this.setOpen(true)} onMouseLeave={this.setOpen(false)}>
                <div style={this.getPositionStyle()}>
                    { this.renderOverlay(this.props) }
                </div>
            </div>
        );

    }

}
