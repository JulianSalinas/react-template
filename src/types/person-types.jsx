import PropTypes from "prop-types";


export default PropTypes.shape({

    about: PropTypes.string,
    events: PropTypes.array,
    completeName: PropTypes.string.isRequired,
    personalTitle: PropTypes.string.isRequired,

})