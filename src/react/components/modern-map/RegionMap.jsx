import React from "react";
import PropTypes from "prop-types";
import MapPictures from "./CountryPictures";

const ProvinceStyle = props => ({
    transition: "all .8s ease-in-out",
    fill: props.selected === props.id ? props.color : "#ccc",
});

const RegionMap = props =>
    <path
        id={props.id}
        style={ProvinceStyle(props)}
        d={MapPictures[props.id.toLowerCase()]}
        onMouseLeave={() => props.changeSelected(null)}
        onMouseEnter={() => props.changeSelected(props.id)}
    />;

RegionMap.propTypes = {
    id: PropTypes.string.isRequired,
    changeSelected: PropTypes.func
};

export default RegionMap;

