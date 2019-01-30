import PropTypes from "prop-types";

export default {

    user: PropTypes.object.isRequired,
    drawerType: PropTypes.string.isRequired,
    drawerManager: PropTypes.object.isRequired,

    changeTheme: PropTypes.func.isRequired,
    changeDrawerType: PropTypes.func.isRequired,

};