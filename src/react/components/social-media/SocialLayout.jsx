import PropTypes from "prop-types";
import React, {Component} from "react";


class SocialLayout extends Component {

    state = { mounted: false };

    static propTypes = {
        border: PropTypes.bool,
        background: PropTypes.string,
        position: PropTypes.oneOf(["up", "down", "left", "right"])
    };

    static defaultProps = {
        border: false,
        background: "transparent",
        position: "right"
    };

    constructor(props){
        super(props);
        this.container = React.createRef();
    }

    componentDidMount(){
        this.setState({ mounted: true });
    }

    render(){

        const border = {
            borderTop: "2px dotted",
            borderLeft: "2px dotted",
            borderBottom: "2px dotted",
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
        };

        const baseStyle = {
            [this.props.position]: 0,
            top: "50%",
            display: "flex",
            position: "fixed",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 16px 32px 16px",
            backgroundColor: this.props.background,
            transition: "all 1s ease-in-out",
        };

        if (this.state.mounted) {
            baseStyle.marginTop = - this.container.current.clientHeight / 2;
        }

        const borderedStyle = {
            ...border,
            ...baseStyle
        };

        const style = this.props.border ? borderedStyle : baseStyle;

        return (
            <div ref={this.container} style={style}>
                { this.props.children }
            </div>
        );

    }

}

export default SocialLayout;