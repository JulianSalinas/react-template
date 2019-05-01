import PropTypes from "prop-types";
import React, { Component } from "react";

import SocialIcon from "./SocialIcon";
import SocialLayout from "./SocialLayout";


const SocialIconList = props => props.list.map((name, index) =>
    <SocialIcon
        key={name}
        name={name}
        index={index}
        middleIndex={props.middleIndex}
        selectedIndex={props.selectedIndex}
        isSelected={props.selectedIndex === index}
        changeSelectedIndex={props.changeSelectedIndex}
    />
);

class SocialMedia extends Component {

    state = {
        selectedIndex: -1
    };

    static propTypes = {
        position: PropTypes.oneOf(["up", "down", "right", "left"]),
        socialMediaList: PropTypes.arrayOf(PropTypes.string)
    };

    static defaultProps = {
        position: "right",
        socialMediaList: ["facebook", "instagram", "pinterest", "snapchat", "twitter"]
    };

    componentWillMount(){
        this.changeSelectedIndex(this.state.selectedIndex);
    }

    changeSelectedIndex = (selected) => {
        const index = this.getMiddleIndex();
        this.setState({ selectedIndex: selected === -1 ? index : selected })
    };

    getMiddleIndex = () => {
        const list = this.props.socialMediaList;
        return Math.floor(list.length / 2);
    };

    render() {
        return (
            <SocialLayout position={this.props.position}>
                <SocialIconList
                    list={this.props.socialMediaList}
                    middleIndex={this.getMiddleIndex()}
                    selectedIndex={this.state.selectedIndex}
                    changeSelectedIndex={this.changeSelectedIndex}
                />
            </SocialLayout>
        );
    }

}

export default SocialMedia;
