import PropTypes from "prop-types";


export default PropTypes.shape({

    key: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

    eventype: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,

    date: PropTypes.number,
    end: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,

    briefSpanish: PropTypes.string,
    briefEnglish: PropTypes.string,

})