import React from "react";
import PropTypes from "prop-types";


const SocialIcon = props => {

    const {
        name,
        baseSize,
        isSelected,
    } = props;

    const {
        index,
        selectedIndex,
        changeSelectedIndex
    } = props;

    const image = require(`../../../assets/social/${name}.png`);
    const distance = Math.abs(selectedIndex - index);
    const size = (5 - distance) * baseSize / 5 + 16;

    const iconStyle = {
        width: 6 * size / 4,
        height: 6 * size / 4,
        transition: "all 1s ease-in-out",
    };

    const containerStyle = {
        width: size,
        height: size,

        marginTop: 0,
        marginBottom: 0,

        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",

        zIndex: isSelected ? 1024 : index,
        transition: "all 1s ease-in-out",
    };

    return (
        <div style={containerStyle}
             onMouseEnter={() => changeSelectedIndex(index)}
             onMouseLeave={() => changeSelectedIndex(-1)}
        >
            <img src={image} alt={name} style={iconStyle}/>
        </div>
    );

};

SocialIcon.defaultProps = {
    baseSize: 64,
    isSelected: false,
};

SocialIcon.propTypes = {
    baseSize: PropTypes.number,
    isSelected: PropTypes.bool,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    middleIndex: PropTypes.number.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    changeSelectedIndex: PropTypes.func.isRequired
};

export default SocialIcon;