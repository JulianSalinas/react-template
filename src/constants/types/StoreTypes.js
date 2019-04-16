import PropTypes from "prop-types";
import UserTypes from "./UserTypes"


export default {

    user: UserTypes,
    people: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,

    createEvent: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired

};